// @app/(Dashboard)/home/_components/AllPCsSection.tsx

// Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const AllPCsSection = () => {
  return (
    <>
      <div className="h-full w-full">
        <div className="mb-8 flex w-full items-center justify-center rounded-lg bg-zinc-400/75 px-4 dark:bg-zinc-900">
          <Search />
          <Input
            placeholder="Search PCs"
            type="text"
            className="border-0 border-none px-6 py-6 text-zinc-900 focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-zinc-900 dark:text-zinc-200"
          />
        </div>

        <div className="grid h-full w-full grid-cols-4 gap-12">
          <Button className="mx-auto h-48 w-48 cursor-pointer rounded-xl border border-white/30 bg-white/10 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-2xl active:scale-95"></Button>
        </div>
      </div>
    </>
  );
};

export default AllPCsSection;
