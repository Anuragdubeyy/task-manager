"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
// import { toast } from "@/components/ui/use-toast";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const isUserAuthenticated = localStorage?.getItem("isUserAuthenticated");
    if (isUserAuthenticated) {
      router.push("/");
    }
  }, [router]);

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="max-w-lg w-full p-7 shadow-md rounded-md">
        <h1 className="mb-14 text-3xl text-white/90 text-center tracking-tight font-bold">
          DWD Dashboard
        </h1>
        <form 
        // onSubmit={handleSubmit} 
        className="space-y-16">
          <div className="space-y-6">
            <div className="space-y-2">
              <label>Username:</label>
              <div>
                <Input
                  className="text-white/90 h-12 border border-input ring-ring px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 "
                  type="text"
                  placeholder="Enter your user id"
                //   value={userName}
                //   onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label>Password:</label>
              <div>
                <Input
                  className="text-white/90 h-12 border border-input ring-ring px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 "
                  type="password"
                  placeholder="Enter your password"
                //   value={password}
                //   onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <Button
            // disabled={isLoading}
            className="transition-all flex justify-center items-center w-full hover:bg-gray-900 text-white/90 py-2 whitespace-nowrap font-medium px-4 bg-[#2C3E50] h-10 rounded-md text-sm"
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    </section>
  );
}
