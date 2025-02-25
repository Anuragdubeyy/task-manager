import React from "react";
import { Input } from "../ui/input";
import { Mail, Plus, UserCircle } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-white rounded-xl p-2 flex justify-between">
      <Input className="w-56 bg-purple-50" placeholder="Search" />
      <div className="flex gap-5 items-center">
        <div className="flex gap-1 bg-purple-100  text-black text-sm items-center rounded-2xl p-2">
          <Plus className="w-3 h-3 " /> New Task
        </div>
        <Mail className="w-6 h-6"/>
        <UserCircle className="w-6 h-6"/>
      </div>
    </div>
  );
}
