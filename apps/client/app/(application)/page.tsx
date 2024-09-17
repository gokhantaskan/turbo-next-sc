"use client";

import { Button } from "@ui/components/Button";
import { Dialog } from "@ui/components/Dialog";
import { useState } from "react";

import { refresh } from "@/lib/services/auth";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
  );
}
