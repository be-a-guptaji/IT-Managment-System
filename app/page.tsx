// @app/page.tsx

"use client";

// Hooks
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      // router.push("/home");
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <>
      <div className="flex h-screen items-center justify-center dark:bg-black">
        Hello
      </div>
    </>
  );
}
