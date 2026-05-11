import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "ALODO TECH",
  description: "Agence Digitale ALODO TECH",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,600" />
        <link rel="stylesheet" href="/assets/fonts/font-awesome.min.css" />
        <link rel="stylesheet" href="/assets/fonts/themify-icons.css" />
        <link rel="stylesheet" href="/assets/owlcarousel/css/owl.carousel.css" />
        <link rel="stylesheet" href="/assets/owlcarousel/css/owl.theme.css" />
        <link rel="stylesheet" href="/assets/css/fonts.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/menu.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </head>
      <body data-spy="scroll" data-offset="80" suppressHydrationWarning>
        {children}
        
        <Script src="/assets/js/jquery-1.12.4.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
        <Script src="/assets/js/modernizr-2.8.3.min.js" />
        <Script src="/assets/owlcarousel/js/owl.carousel.min.js" />
        <Script src="/assets/js/jquery.magnific-popup.min.js" />
        <Script src="/assets/js/jquery.mixitup.js" />
        <Script src="/assets/js/jquery.appear.js" />
        <Script src="/assets/js/jquery.inview.min.js" />
        <Script src="/assets/js/jquery.stellar.min.js" />
        <Script src="/assets/js/wow.min.js" />
        <Script src="/assets/js/jquery.sticky.js" />
        <Script src="/assets/js/menu.js" />
        <Script src="/assets/js/form-contact.js" />
        <Script src="/assets/js/scrolltopcontrol.js" />
        <Script src="/assets/js/scripts.js" />
      </body>
    </html>
  );
}
