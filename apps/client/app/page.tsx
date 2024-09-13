"use client";

import { Button } from "@repo/ui/Button";
import Logo from "app/assets/img/icons/next.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-lvh">
      <header className="py-4 bg-white border-solid border-0 border-b border-gray-200">
        <div className="container">
          <Logo className="h-8" />
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-4">
          <ol>
            <li>
              Get started by editing <code>app/page.tsx</code>
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>
          <div className="space-x-2">
            <Button>Default</Button>
            <Button variant="primary">Primary</Button>
          </div>
        </div>
      </main>
      <footer className="py-4 bg-gray-950 text-white border-solid border-0 border-t border-gray-200">
        <div className="container flex items-center gap-4">
          <a
            className="text-gray-100 flex items-center gap-1 no-underline"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file-text.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="text-gray-100 flex items-center gap-1 no-underline"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="text-gray-100 flex items-center gap-1 no-underline"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </div>
      </footer>
    </div>
  );
}
