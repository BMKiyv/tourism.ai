import type { Metadata } from "next";
import { Oswald, Open_Sans } from "next/font/google";
import "./globals.css";
import "./webflow-css/normalize.css";
import "./webflow-css/webflow.css";
import "./webflow-css/tourismgovua.webflow.css";
import "./webflow-styles.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Script from "next/script";
import { AuthProvider } from "@/components/AuthProvider";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";

export const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin", "cyrillic"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Державне агентство розвитку туризму України",
  description:
    "Центральний орган виконавчої влади, який реалізує державну політику в галузі туризму та курортів України.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={cn(oswald.variable, openSans.variable)}
      data-wf-site="5fe0d678b18d7e19e32c3389"
    >
      <body
        className="font-sans antialiased text-[#333] bg-white customCursor"
        suppressHydrationWarning
      >
        <AuthProvider>
          <Header />
          <AccessibilityWidget />
          <main id="main-content" className="header-trigger">
            {children}
          </main>
          <Footer />
        </AuthProvider>

        {/* Webflow JS */}
        <Script
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/webflow/js/webflow.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
