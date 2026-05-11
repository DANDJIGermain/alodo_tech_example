const fs = require('fs');
let html = fs.readFileSync('monoline-1.0.0/index.html', 'utf-8');

// Extract body content
const bodyMatch = html.match(/<div class="preloader">[\s\S]*?<!-- END FOOTER -->/);
if (!bodyMatch) {
  console.log("Could not find body content");
  process.exit(1);
}

let bodyContent = bodyMatch[0];

// Convert class to className
bodyContent = bodyContent.replace(/class=/g, 'className=');

// Convert for to htmlFor (if any)
bodyContent = bodyContent.replace(/for=/g, 'htmlFor=');

// Convert HTML comments to JSX comments
bodyContent = bodyContent.replace(/<!--(.*?)-->/g, '{/* $1 */}');

// Convert inline styles. This is tricky. Let's find style="something" and convert to JSX style objects.
bodyContent = bodyContent.replace(/style="([^"]+)"/g, (match, p1) => {
  const parts = p1.split(';').filter(p => p.trim() !== '');
  const styleObj = {};
  parts.forEach(part => {
    const [key, value] = part.split(':').map(p => p.trim());
    if (key && value) {
      const camelKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      styleObj[camelKey] = value;
    }
  });
  return `style={${JSON.stringify(styleObj)}}`;
});

// Close void elements
const voidElements = ['img', 'br', 'hr', 'input'];
voidElements.forEach(tag => {
  const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'gi');
  bodyContent = bodyContent.replace(regex, `<${tag}$1 />`);
});

const pageJsContent = `
export default function Home() {
  return (
    <>
      ${bodyContent}
    </>
  );
}
`;

fs.writeFileSync('src/app/page.js', pageJsContent);
console.log("Successfully converted index.html to page.js");
