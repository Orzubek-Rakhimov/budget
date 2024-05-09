import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen w-full ">
      <Sidebar />
      <main className=" w-full flex flex-1 flex-col">
        <Header />
        {children}
      </main>
    </div>
  );
}

export default layout;
