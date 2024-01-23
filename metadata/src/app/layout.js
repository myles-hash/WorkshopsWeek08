import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js Blog",
  description: "A simple blog built with Next.js",
  openGraph: {
    title: "Next.js Blog",
    description: "A simple blog built with Next.js",
    type: "website",
    url: "https://next-comments-postgres.vercel.app/",
    image: "https://static.wikia.nocookie.net/dogelore2/images/2/2f/Bingus.png/revision/latest?cb=20220831102143", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>Metadata Demo</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/posts">Posts</Link>
        </nav>
        {children}</body>
    </html>
  );
}
