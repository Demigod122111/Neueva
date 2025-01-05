import { Geist, Geist_Mono } from "next/font/google"; 
import Link from "next/link";
import "./globals.css";
import SearchBar from "./components/searchbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Neueva",
  description: "Explore apps and games with Neueva.",
};

export default function RootLayout({ children }) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-900 text-gray-100 flex flex-col`}
      >
        {/* Header */}
        <header className="bg-gray-800 shadow-md">
          <div className="container mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-2">
            <h1 className="text-2xl font-extrabold text-blue-400">
              <Link href="/">Neueva</Link>
            </h1>
            <nav className="flex overflow-x-auto space-x-8 sm:space-x-4 text-gray-300 font-medium">
              <Link href="/browse" className="hover:text-blue-400">
                Browse
              </Link>
              <Link href="/browse?category=App" className="hover:text-blue-400">
                Apps
              </Link>
              <Link href="/browse?category=Game" className="hover:text-blue-400">
                Games
              </Link>
              <Link href="/about" className="hover:text-blue-400">
                About
              </Link>
              <Link href="/contact" className="hover:text-blue-400">
                Contact
              </Link>
            </nav>

            <SearchBar />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-6 py-10">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-400 py-6">
          <div className="container mx-auto px-6 text-center">
            <p>© {currentYear} Neueva. All rights reserved.</p>
            <div className="mt-4 space-x-6">
              <Link href="/privacy-policy" className="hover:text-gray-100">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-gray-100">
                Terms of Service
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
