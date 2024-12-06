import Link from 'next/link';
import { UserButton } from "@clerk/nextjs";
import { auth } from '@clerk/nextjs/server';
import ThemeToggle from './ThemeToggle';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Menu } from "lucide-react";

export default async function Navbar() {
  const { userId } = await auth();

  const NavLinks = () => (
    <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
      <Link href="/" className="text-gray-600 hover:font-bold hover:text-black dark:text-white">
        Home
      </Link>
      <Link href="/about" className="text-gray-600 hover:font-bold hover:text-black dark:text-white">
        About
      </Link>
      {userId && (
        <Link href="/dashboard" className="text-gray-600 hover:font-bold hover:text-black dark:text-white">
          Dashboard
        </Link>
      )}
    </div>
  );

  const AuthButtons = () => (
    <>
      {!userId && (
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0">
          <Link 
            href="/sign-in"
            className="text-gray-600 hover:text-gray-900 md:mx-2 dark:text-white"
          >
            Sign In
          </Link>
          <Link 
            href="/sign-up"
            className="text-gray-600 hover:text-gray-900 md:mx-2 dark:text-white"
          >
            Sign up
          </Link>
        </div>
      )}
    </>
  );

  const BotonUserClerk = () => (
    <>
      {userId && <UserButton afterSignOutUrl="/" />}
    </>
  );

  return (
    <nav className="bg-white border-b shadow-sm dark:bg-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-bold text-xl">
              Logo
            </Link>
            <ThemeToggle />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <NavLinks />
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center">
           <BotonUserClerk />
            <AuthButtons />
          </div>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger className="md:hidden flex space-x-8 ">
              <BotonUserClerk />
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Navigation Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-8 pt-6">
                <NavLinks />
                <AuthButtons />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}