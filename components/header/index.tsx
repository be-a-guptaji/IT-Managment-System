// @components/header/index.tsx

// Components
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <>
      <div className="z-10 flex h-14 w-full items-center justify-between bg-[#131313] px-4 shadow-md backdrop-blur-sm">
        <SidebarTrigger className="h-8 w-8 cursor-pointer" />
      </div>
      <Separator className="z-10 h-1 bg-white/50" />
    </>
  );
};

export default Index;
