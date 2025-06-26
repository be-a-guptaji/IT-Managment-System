// @app/(Dashboard)/home/_components/AllPCsSection.tsx

// Components
import { Button } from "@/components/ui/button";

const AllPCsSection = () => {
  return (
    <>
      <div className="grid h-full w-full grid-cols-5 gap-12">
        <Button className="mx-auto h-48 w-48 cursor-pointer rounded-xl border border-white/30 bg-white/10 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-2xl"></Button>
      </div>
    </>
  );
};

export default AllPCsSection;
