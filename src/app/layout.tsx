import Script from "next/script";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"; // Correct import from @vercel/analytics/react

import "./globals.css";
import Header from "@/components/layout/header";
import { Providers } from "@/lib/providers";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

const title = "David Uchenna | Software Developer | frontend developer";
const description =
  "A self-proclaimed designer who specializes in frontend development, from Anambra, Nigeria.";
const url = "https://www.linkedin.com/in/David-uchenna/";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: ["Frontend Developer", "React Developer", "JavaScript Developer", "Webflow", "Web developer"],
  creator: "David Uchenna",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: title,
    images: [
      {
        url: "/images/open-graph-David.jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@David",
    images: "/images/open-graph-David.jpeg",
  },
  icons: {
    icon: "/photo1.jpg",
    shortcut: "/photo1.jpg",
    apple: "/photo1.jpg",
  },
};

const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      {googleAnalyticsId ? (
        <head>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          ></Script>
          <Script id="google-anayltics-script">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${googleAnalyticsId}');
          `}
          </Script>
        </head>
      ) : null}
      <body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
        <Providers>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          <Footer />
        </Providers>
        <Analytics /> {/* Correctly added Analytics component */}
      </body>
    </html>
  );
}
