import { Header } from "@/components/Header";
import "./globals.scss";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import dictionary from "@/i18n/dictionary.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: dictionary["metadata.title"],
  description: dictionary["metadata.description"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <meta charSet="utf-8" />
        {/* <link rel="stylesheet" href="style.css" /> */}
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
