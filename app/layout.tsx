// @app/layout.tsx

// Description
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// Components
import { ThemeProvider } from "@/components/provider/themeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import NavigationSidebar from "@/components/navigation/index";

// Hooks
import ClientOnly from "@/components/hydration/mounted";

// CSS
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ADRDE",
  description: "IT Management Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <NavigationSidebar />
          <main className="w-full h-screen">
            <ClientOnly>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                storageKey="color-theme"
                themes={["light", "dark"]}
                enableSystem
                disableTransitionOnChange
              >
                {children}
              </ThemeProvider>
            </ClientOnly>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
