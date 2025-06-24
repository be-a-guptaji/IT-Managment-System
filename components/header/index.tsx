// @components/header/index.tsx

// Components
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/modeToggle/modeToggle";

const Index = () => {
  return (
    <>
      <div className="z-10 flex h-14 w-full items-center justify-between px-4 shadow-md backdrop-blur-sm dark:bg-[#1c1917]">
        <div className="flex items-center justify-center gap-6">
          <SidebarTrigger className="cursor-pointer" />
          <h2 className="text-xl font-semibold tracking-wide">ADRDE</h2>
        </div>
        <ModeToggle />
      </div>
      <Separator className="z-10 h-1 dark:bg-white/50" />
    </>
  );
};

export default Index;
