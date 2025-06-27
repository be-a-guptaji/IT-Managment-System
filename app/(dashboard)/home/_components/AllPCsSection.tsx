// @app/(Dashboard)/home/_components/AllPCsSection.tsx

// Components
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/search/Index";

const AllPCsSection = () => {
  return (
    <>
      <SearchBar />
      <div className="grid h-full w-full grid-cols-4 gap-12">
        <Button className="mx-auto h-48 w-48 cursor-pointer gap-0 rounded-xl border border-white/30 bg-white/10 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-2xl active:scale-95">
          <div></div>
          <div className="flex w-full items-center justify-center gap-2">
            <Button className="w-1/2 cursor-pointer">Edit</Button>
            <Button className="w-1/2 cursor-pointer">Delete</Button>
          </div>
        </Button>
      </div>
    </>
  );
};

export default AllPCsSection;
