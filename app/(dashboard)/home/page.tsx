// @app/(Dashboard)/Home/page.tsx

"use client";

// App Data
import { HomeNavigationItem } from "@/lib/constant";

// React
import { Fragment, useState } from "react";

// Components
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Utils
import { cn } from "@/lib/utils";

const page = () => {
  const [section, setSection] = useState("All PCs");

  return (
    <>
      <header className="flex items-center justify-center gap-8 rounded-lg p-6">
        {HomeNavigationItem.map((item) => {
          const IconComponent = item.icon;
          return (
            <Fragment key={item.title}>
              <Button
                className={cn(
                  "flex cursor-pointer items-center gap-2 hover:scale-105 active:scale-95",
                  section === item.title &&
                    "bg-blue-500 hover:bg-blue-500 active:bg-blue-500"
                )}
                onClick={() => setSection(item.title)}
              >
                <span className="flex items-center gap-1 font-semibold">
                  <IconComponent /> {item.title}
                </span>
              </Button>
            </Fragment>
          );
        })}
      </header>
      <Separator className="z-10 h-1 dark:bg-white/50" />
    </>
  );
};

export default page;
