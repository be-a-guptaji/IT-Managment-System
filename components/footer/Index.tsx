// @components/footer/Index.tsx

// Utility
import Link from "next/link";

const Index = () => {
  return (
    <>
      <footer className="w-full border-t border-gray-300 bg-gray-100 text-gray-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-6 md:flex-row">
          <p className="cursor-default text-sm font-light">
            &copy; {new Date().getFullYear()} ADRDE IT Management System. All
            rights reserved.
          </p>

          <div className="mt-0 flex gap-4">
            <Link href="#" className="transition hover:text-blue-500">
              Privacy Policy
            </Link>
            <Link href="#" className="transition hover:text-blue-500">
              Terms of Service
            </Link>
            <Link href="#" className="transition hover:text-blue-500">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
