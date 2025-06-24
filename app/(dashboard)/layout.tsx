// @app/(dashboard)/layout.tsx

// Components
import { SidebarProvider } from "@/components/ui/sidebar";
import NavigationSidebar from "@/components/navigation/index";

// Types
import { ReactNode } from "react";

const layout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <>
      <SidebarProvider>
        <NavigationSidebar />
        <main className="h-screen w-full">{children}</main>
      </SidebarProvider>
    </>
  );
};

export default layout;
