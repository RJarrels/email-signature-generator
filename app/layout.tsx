import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Banner } from "./components/banner/banner";
import { LanguageProvider } from "./context/language-context";

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1.0,
    themeColor: "#000817",
};

export const metadata: Metadata = {
    title: "iFIT Email Signature Generator",
    description: "Generate professional email signatures with this iFIT email signature generator.",
    manifest: "/site.webmanifest",
    icons: {
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
      other: [
        { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" },
      ],
    },
    other: {
      "msapplication-TileColor": "#000817",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>
          <Banner
            logoSrc="/ifit-logo.svg"
            alt="iFit Logo"
            width={75}
            height={24}
          />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
