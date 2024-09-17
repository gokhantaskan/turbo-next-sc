"use client";

import { Button } from "@ui/components/Button";
import { Dialog } from "@ui/components/Dialog";
import Image from "next/image";
import { useState } from "react";

import { AppNavigation } from "@/components/app/AppNavigation";
import { refresh } from "@/lib/utils/actions/auth";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-lvh">
      <AppNavigation />
      <main className="flex-1">
        <div className="container py-4">
          <div>
            <div className="mt-3 space-x-2">
              <Button>Default</Button>
              <Button
                variant="error"
                onClick={refresh}
              >
                Refresh Token
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                Open Modal
              </Button>
            </div>
            <Dialog
              isOpen={isOpen}
              onClose={() => {
                setIsOpen(false);
              }}
              title="Dialog Title"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              actions={
                <>
                  <Button variant="primary">Save</Button>
                  <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                  <Button
                    variant="error"
                    style={{ marginInlineEnd: "auto" }}
                    onClick={() => {
                      if (confirm("Are you sure?")) {
                        setIsOpen(false);
                      }
                    }}
                  >
                    Delete
                  </Button>
                </>
              }
            >
              Test
            </Dialog>
          </div>
        </div>
      </main>
      <footer className="py-4 text-white border-0 border-t border-gray-200 border-solid bg-gray-950">
        <div className="container flex items-center gap-4">
          <a
            className="flex items-center gap-1 text-gray-100 no-underline"
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
            className="flex items-center gap-1 text-gray-100 no-underline"
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
            className="flex items-center gap-1 text-gray-100 no-underline"
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
