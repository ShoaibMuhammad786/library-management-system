"use client";
import "./globals.css";
import Navbar from "@/components/Global/Navbar";
import { usePathname } from "next/navigation";
import { Providers } from "../redux/Providers";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // List of auth routes where navbar and footer should not show
  const isAuthRoute = pathname === "/login" || pathname === "/register";

  return (
    <html lang="en">
      {!isAuthRoute && <Navbar />}
      <body className={``}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
