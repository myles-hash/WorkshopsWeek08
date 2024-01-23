import "./globals.css";
import { Inconsolata, Grape_Nuts } from "next/font/google";

const inconsolata = Inconsolata({ subsets: ["latin"], weight: ["400", "700"] });
const grapenuts = Grape_Nuts({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Images | Fonts",
  description: "This page is about images and fonts in next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>{children}</body>
    </html>
  );
}
