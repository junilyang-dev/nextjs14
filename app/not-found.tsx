import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not found",
};
export default function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}