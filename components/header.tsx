"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-background/50">
      <div className="w-full mx-auto px-16 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-xl font-bold tracking-tight text-foreground">
                MRI
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center pl-20">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                {/* Products */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-semibold">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[200px]">
                      <ListItem href="/products/maigrid" title="MAIGrid™" />
                      <ListItem href="/products/maigent" title="MAIGent™" />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Solution */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-semibold">
                    Solution
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[240px]">
                      <ListItem href="#" title="For Marketer" />
                      <ListItem href="#" title="For Customer Service" />
                      <ListItem href="#" title="For Sales Team" />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Resources */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-semibold">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[240px]">
                      <ListItem href="#" title="Get Started" />
                      <ListItem href="#" title="Partner Program" />
                      <ListItem href="#" title="Power Puff Club" />
                      <ListItem href="#" title="FAQs" />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Company */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-semibold">
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[200px]">
                      <ListItem href="#" title="About" />
                      <ListItem href="#" title="Our Programs" />
                      <ListItem href="#" title="Contact Us" />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-10">
            <Link
              href="/login"
              className="text-base font-semibold text-foreground hover:text-foreground/80 transition-colors"
            >
              Login
            </Link>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-6 py-5 text-base font-semibold">
              Sign up →
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block rounded-md p-3 mb-1 no-underline outline-none transition-colors",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
