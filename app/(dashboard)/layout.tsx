// @app/(dashboard)/layout.tsx

// Components
import { SidebarProvider } from "@/components/ui/sidebar";
import NavigationSidebar from "@/components/navigation/index";
import Header from "@/components/header/index";
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
        <main className="h-screen w-full overflow-hidden">
          <Header />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
};

export default layout;
