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
      className={`w-60  rounded-xl  bg-white shadow`}
    >
      <div>
        <Link
          href="/"
          className="text-black h-screen text-2xl pl-10 pt-3 mx-auto  Title"
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
                    ? "bg-purple-100"
                    : ""
                } text-black hover:bg-purple-100 p-2 rounded cursor-pointer transition duration-300`}
              >
                <p className="ml-2">{link.title}</p>
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
        <Button className="bg-transparent w-48 absolute bottom-10 text-black hover:bg-purple-100 ">
          <LogOut className="mr-2" /> Log out
        </Button>
      </AlertConfirmation>
    </aside>
  );
}
