import { Inter } from "next/font/google";
import "@/app/globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <h1 className="text-center text-xl mb-8 mt-4">
          <Link href="/">Next.js App Router Intercepting Routes</Link>
        </h1>
        {children}
        {modal}
      </body>
    </html>
  );
}
