import { NextResponse } from "next/server";

const locales = ["fr", "en"];
const defaultLocale = "fr";

function getLocale(request) {
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    // Simple parser for accept-language header
    const preferredLocales = acceptLanguage
      .split(",")
      .map((lang) => {
        const [locale, q] = lang.split(";");
        const langCode = locale.trim().split("-")[0]; // e.g. "fr-FR" -> "fr"
        return { locale: langCode, q: q ? parseFloat(q.split("=")[1]) : 1 };
      })
      .sort((a, b) => b.q - a.q);

    for (const pref of preferredLocales) {
      if (locales.includes(pref.locale)) {
        return pref.locale;
      }
    }
  }
  return defaultLocale;
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Exclude API routes, static files, and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // e.g. favicon.ico, images, css
  ) {
    return;
  }

  // Check if the pathname is missing a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|sitemap.xml|robots.txt).*)'],
};
