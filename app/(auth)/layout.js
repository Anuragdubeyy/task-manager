import { Inter } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DMS Dashboard",
  description: "Generated by create next app",
};

export default function AuthLayout({ children }) {
  return (
    <html>
      <body className={`${inter.className} bg-[#0e151d] text-white/90`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
