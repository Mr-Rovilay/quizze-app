import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, LogIn, UserPlus, Home, LayoutDashboard } from "lucide-react";
import MaxWidthWrapper from './MaxWidthWrapper';

const navigation = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
];

const Navbar = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const authenticated = await isAuthenticated();

  return (
    <MaxWidthWrapper className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto">
        <nav className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 font-bold text-xl hover:text-primary transition-colors"
            >
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-md">Q</span>
              <span>uizze</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-2">
              {authenticated ? (
                <LogoutLink className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring px-4 py-2 bg-secondary hover:bg-secondary/80">
                  Log out
                </LogoutLink>
              ) : (
                <>
                  <LoginLink className="inline-flex items-center space-x-1 justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent/10 px-4 py-2">
                    <LogIn className="h-4 w-4 mr-1" />
                    <span>Log in</span>
                  </LoginLink>
                  <RegisterLink className="inline-flex items-center space-x-1 justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2">
                    <UserPlus className="h-4 w-4 mr-1" />
                    <span>Sign up</span>
                  </RegisterLink>
                </>
              )}
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-accent/10">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-72">
                  <SheetHeader>
                    <SheetTitle>
                      <div className="flex items-center space-x-2 font-bold text-xl">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-md">Q</span>
                        <span>uizze</span>
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                  
                  {/* Mobile Navigation Links */}
                  <div className="flex flex-col space-y-1 mt-8">
                    {navigation.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent/10 transition-colors"
                        >
                          <Icon className="h-4 w-4" />
                          <span>{item.name}</span>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Mobile Auth Buttons */}
                  <div className="flex flex-col space-y-2 mt-8 pt-8 border-t">
                    {authenticated ? (
                      <LogoutLink className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring px-4 py-2 bg-secondary hover:bg-secondary/80">
                        Log out
                      </LogoutLink>
                    ) : (
                      <>
                        <LoginLink className="inline-flex items-center space-x-1 justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent/10 px-4 py-2">
                          <LogIn className="h-4 w-4 mr-1" />
                          <span>Log in</span>
                        </LoginLink>
                        <RegisterLink className="inline-flex items-center space-x-1 justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2">
                          <UserPlus className="h-4 w-4 mr-1" />
                          <span>Sign up</span>
                        </RegisterLink>
                      </>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </div>
    </MaxWidthWrapper>
  );
};

export default Navbar;