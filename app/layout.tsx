import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LawTribes Attorneys | Abuja, Nigeria",
  description: "LawTribes Attorneys — a premier full-service law firm in Abuja, Nigeria. Expert legal counsel across corporate, litigation, real estate, criminal defense, family law, and more.",
  keywords: "law firm Abuja, Nigerian lawyers, corporate law Nigeria, litigation Abuja, LawTribes Attorneys",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
