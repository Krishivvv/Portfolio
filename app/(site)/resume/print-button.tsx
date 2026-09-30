"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="btn btn-primary press print:hidden">
      <Printer aria-hidden className="size-4" /> Print or save as PDF
    </button>
  );
}
