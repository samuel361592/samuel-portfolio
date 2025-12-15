import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <header className="border-b">
          <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between">
            <Link href="/" className="font-semibold">
              Samuel
            </Link>
            <div className="flex gap-6 text-sm">
              <Link href="/projects">Projects</Link>
              <Link href="/resume">Resume</Link>
            </div>
          </nav>
        </header>

        <main className="max-w-5xl mx-auto px-6 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}

<footer className="border-t mt-24">
  <div className="max-w-5xl mx-auto px-6 py-6 text-sm text-gray-500">
    © {new Date().getFullYear()} Samuel. Built with Next.js.
  </div>
</footer>
