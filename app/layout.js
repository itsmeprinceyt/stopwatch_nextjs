import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar.jsx"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stopwatch - ItsMe Prince",
  description: "A sleek and precise stopwatch built with Next.js and Tailwind CSS. Perfect for timing any activity with ease and accuracy.",
  keywords: "stopwatch, timer, next.js, Tailwind CSS, ItsMe Prince, web tools",
  author: "Mohd Uvaish",
  icons: {
    icon: "/stopwatch.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative">
          <Navbar/>
        {children}
        </div>
        </body>
    </html>
  );
}
