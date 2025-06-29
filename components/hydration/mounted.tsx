// @components/hydration/mounted.tsx

"use client";

// Hooks
import { ReactNode, useEffect, useState } from "react";

export default function ClientOnly({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return children;
}
