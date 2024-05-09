"use client";
import {
  BellIcon,
  CalendarIcon,
  DollarSignIcon,
  HomeIcon,
  SettingsIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { asideLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside id="aside" className="border w-[360px] relative transition-all">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-4 sm:px-5">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <DollarSignIcon className="h-6 w-6" />
            <span>Expense Tracker</span>
          </Link>

          <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
            <BellIcon className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>

        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 sm:px-5 text-sm font-medium">
            {asideLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  href={link.href}
                  key={link.href}
                  className={cn(
                    "flex items-center gap-2 rounded-lg text-muted-foreground transition-colors hover:text-foreground px-3 py-2",
                    pathname === link.href && "bg-accent text-accent-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {link.text}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}
