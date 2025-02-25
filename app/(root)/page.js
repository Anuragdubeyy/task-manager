"use client";

import TopBar from "@/components/shared/TopBar";
import { Calendar } from "@/components/ui/calendar";
import { CheckCircle, Option } from "lucide-react";
import { useState } from "react";

export default function Home() {
  // const [date, setDate] = useState<Date>(new Date());

  return (
    <div>
      <TopBar />
      <div className="flex gap-5">
        <Calendar
          mode="single"
          // selected={date}
          // onSelect={(selectedDate) => setDate(selectedDate ?? new Date())}
          className="rounded-2xl  bg-white w-fit mt-5"
        />
        <div className="w-96 mt-5 bg-white  text-black text-sm rounded-2xl p-2">
          <div className="flex justify-between">
            <h2>My Task (5)</h2>
            <Option />
          </div>
          <div className="flex justify-between">
            <div className="flex ga-2">
              <CheckCircle className="w-6 h-6" />
              <h2>Task 1</h2>
            </div>
              <h2>Today</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
