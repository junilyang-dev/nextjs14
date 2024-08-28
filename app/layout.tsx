import "../styles/globals.css";
import { Metadata } from "next";
import Navigation from "../components/navigation";
import Image from 'next/image'
import img1 from "../public/replit.svg";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies",
  },
  description: "The best movies on the best framework",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <img src={`/next.svg`} alt='next이미지' className='nextimg' style={{background:'pink'}} />
        <Image src={img1} />
        <Navigation />
        {children}
      </body>
    </html>
  );
}