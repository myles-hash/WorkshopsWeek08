import { Nabla } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const nabla = Nabla({ subsets: ["latin"]});

export const metadata = {
  title: "Next.js Practice",
  description: "Practicing next.js for myself",
  openGraph: {
    title: "Next.js Practice",
    description: "Practicing next.js for myself",
    type: "website",
    url: "https://next-comments-postgres.vercel.app/",
    image: "https://next-comments-postgres.vercel.app/og-image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nabla.className}>
        <header>This is header herrooo</header>
        <nav>
          <Link href="/">HOME</Link> | <Link href="/about">ABOUT</Link> | <Link href="/posts">POSTS</Link> 
        </nav>
        <div className="container">
        {children}
        </div>
        <footer>This is footer bye byeee</footer>
        </body>
    </html>
  );
}
