"use client";

import { sidebarLinks } from "@/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import AlertConfirmation from "../common/AlertConfirmation";

export default function LeftBar() {
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <aside //style={{overflow:'hidden'}}
      className={`w-56 h-full py-10 overflow-auto flex flex-col justify-between fixed min-w-fit px-8 bg-gray-800 shadow`}
    >
      <div>
        <Link
          href="/"
          className="text-white text-2xl text-center mx-auto font-bold"
        >
        AnuVista
        </Link>
        <div className="flex flex-col gap-2 font-medium mt-4">
          {sidebarLinks.map((link) => (
            <Link key={link.id} className="" href={link.href}>
              <div
                onClick={() => {
                  localStorage.removeItem("page_number", "currentPage");
                }}
                className={`${
                  pathname === link.href ||
                  pathname === link.href + "/" ||
                  (pathname.startsWith(link.alternateHref) &&
                    link.href != "/") ||
                  pathname === link.alternateHref + "/"
                    ? "bg-[#46698b]"
                    : ""
                } text-white hover:bg-[#2C3E50] px-3 py-1.5 w-40 rounded cursor-pointer transition duration-300`}
              >
                <p>{link.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <AlertConfirmation
        title="Are your sure want to log out?"
        description="After this you have to login again."
        confirmButtonText="Log out"
        onConfirm={handleLogout}
      >
        <Button className="bg-transparent hover:bg-[#2C3E50] ">
          <LogOut className="mr-2" /> Log out
        </Button>
      </AlertConfirmation>
    </aside>
  );
}
