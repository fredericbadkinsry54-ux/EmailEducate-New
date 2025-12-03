import { cn } from "@/lib/utils";
import * as React from "react";

export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn("size-6", className)}
      {...props}
    >
      <title>EmailEducate Logo</title>
      <path
        fill="currentColor"
        d="M232 128a104.12 104.12 0 0 1-104 104h-1.37a104 104 0 0 1-96.8-125.13a104.81 104.81 0 0 1 1.8-21.5A104.13 104.13 0 0 1 128 24a103 103 0 0 1 29.83 4.31A104.1 104.1 0 0 1 232 128ZM92.19 86.13a44.17 44.17 0 0 0-21.84 21.74a88.1 88.1 0 0 0 65.52 113.35a8 8 0 0 0 2.26-15.85a72.11 72.11 0 0 1-53.58-92.71a8 8 0 0 0 7.64-16.53Zm-36.3 52.22a8 8 0 0 0-11.78 10.81a72.09 72.09 0 0 1 25.43 50.15a8 8 0 0 0 15.93-1.63a88.08 88.08 0 0 0-29.58-59.33ZM219.64 128a91.31 91.31 0 0 0-20.6-58.85a8 8 0 0 0-12.19 10.32a75.33 75.33 0 0 1 17.15 48.53a8 8 0 0 0 15.64 3Z"
      ></path>
    </svg>
  );
}
