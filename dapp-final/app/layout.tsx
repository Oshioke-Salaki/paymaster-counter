import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Starknet Counter",
  description: "Increase and decrease count with Starknet and ANVU paymaster",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
