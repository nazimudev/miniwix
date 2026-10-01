import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Providers from "./providers";
import Footer from "./components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "MINIWIX",
  description: "Developer products, templates and digital tools.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Providers>
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
