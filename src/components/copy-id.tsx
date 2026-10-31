"use client";

import { useState } from "react";

export function CopyId({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return <button className="whatsapp-id" type="button" onClick={copy} aria-label="کپی شناسهٔ واتس‌اپ">
    <span>واتس‌اپ</span><b dir="ltr">{value}</b><small aria-live="polite">{copied ? "کپی شد" : "کپی شناسه"}</small>
  </button>;
}
