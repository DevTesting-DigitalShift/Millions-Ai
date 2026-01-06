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

// Navigation data structure
const navigationData = [
  {
    title: "Products",
    width: "w-[200px]",
    items: [
      { title: "MAIGrid™", href: "/products/maigrid" },
      { title: "MAIGent™", href: "/products/maigent" },
    ],
  },
  {
    title: "Solution",
    width: "w-[240px]",
    items: [
      { title: "AI in Marketer", href: "#" },
      { title: "AI in Customer Service", href: "#" },
      { title: "AI in Sales", href: "#" },
      { title: "AI in Finance", href: "#" },
      { title: "AI in Procurement", href: "#" },
      { title: "AI in Supply Chain", href: "#" },
      { title: "AI in Legal", href: "#" },
      { title: "AI in Workplace", href: "#" },
      { title: "AI in Security", href: "#" },
    ],
  },
  {
    title: "Resources",
    width: "w-[240px]",
    items: [
      { title: "Get Started", href: "#" },
      {
        title: "Partner Program",
        href: "#",
        subItems: [
          { title: "For Vendors", href: "#" },
          { title: "For SIs", href: "#" },
          { title: "For Resellers", href: "#" },
        ],
      },
      { title: "FAQs", href: "#" },
    ],
  },
  {
    title: "Company",
    width: "w-[200px]",
    items: [
      { title: "About", href: "#" },
      { title: "MillionLifes initiative", href: "#" },
      { title: "Contact Us", href: "#" },
    ],
  },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-background/50">
      <div className="w-full mx-auto px-16 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-xl font-bold tracking-tight text-foreground">
                MRI
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center pl-20">
            <NavigationMenu viewport={false}>
              <NavigationMenuList className="gap-2">
                {navigationData.map((menu, index) => (
                  <NavigationMenuItem key={index} className="relative">
                    <NavigationMenuTrigger className="text-base font-semibold">
                      {menu.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="left-0">
                      <ul className={menu.width}>
                        {menu.items.map((item, itemIndex) => (
                          <React.Fragment key={itemIndex}>
                            <ListItem href={item.href} title={item.title} />
                            {item.subItems && (
                              <ul className="ml-4 border-l-2 border-muted pl-2">
                                {item.subItems.map((subItem, subIndex) => (
                                  <ListItem
                                    key={subIndex}
                                    href={subItem.href}
                                    title={subItem.title}
                                    className="text-sm text-muted-foreground"
                                  />
                                ))}
                              </ul>
                            )}
                          </React.Fragment>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="flex items-center gap-10">
            <Link
              href="/login"
              className="text-base font-semibold text-foreground hover:text-foreground/80 transition-colors"
            >
              Login
            </Link>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-5 text-base font-semibold">
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
            "block rounded-lg p-3 mb-1 no-underline outline-none transition-colors",
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
