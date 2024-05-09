"use client";
import { UserButton } from "@clerk/nextjs";
import { ArrowBigLeft, ArrowBigRight, SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Header() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const handleAside = () => {
    const aside = document.getElementById("aside");
    if (aside) {
      if (isAsideOpen) {
        aside.classList.add("w-0");
        aside.classList.add("hidden");
        setIsAsideOpen(false);
      } else {
        aside.classList.remove("hidden");
        aside.classList.remove("w-0");
        setIsAsideOpen(true);
      }
    }
  };

  return (
    <header className="flex h-14 lg:h-[60px] items-center justify-between gap-4 border-b  px-4 sm:px-5">
      <Button
        onClick={handleAside}
        className="h-8 w-8"
        size="icon"
        variant="outline"
      >
        {!isAsideOpen ? (
          <ArrowBigRight className="h-4 w-4" />
        ) : (
          <ArrowBigLeft className="h-4 w-4" />
        )}
        <span className="sr-only">Toggle notifications</span>
      </Button>
      <div className="flex items-center gap-4">
        <div className="relative w-full max-w-[300px]">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 " />
          <Input
            className="pl-10"
            placeholder="Search expenses..."
            type="search"
          />
        </div>
        <UserButton />
      </div>
    </header>
  );
}
