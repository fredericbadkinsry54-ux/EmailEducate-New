
import { cn } from "@/lib/utils";

export function Seaweed({ className, variant = "seaweed" }: { className?: string; variant?: "seaweed" | "coral" }) {
  if (variant === "coral") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className={cn("w-24 h-24", className)}
        preserveAspectRatio="xMidYMid meet"
      >
        <path d="M50 100 V 70 C 40 60, 40 40, 50 30" stroke="currentColor" strokeWidth="5" fill="none" />
        <path d="M50 30 C 60 20, 80 20, 90 30" stroke="currentColor" strokeWidth="5" fill="none" />
        <path d="M50 50 C 40 40, 20 40, 10 50" stroke="currentColor" strokeWidth="5" fill="none" />
        <path d="M50 70 C 60 80, 80 80, 90 70" stroke="currentColor" strokeWidth="5" fill="none" />
        <path d="M50 70 C 40 80, 20 80, 10 90" stroke="currentColor" strokeWidth="5" fill="none" />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={cn("w-24 h-24", className)}
      preserveAspectRatio="xMidYMid meet"
    >
      <path d="M20,100 C 40,80 10,70 30,50 C 50,30 20,20 40,0" fill="none" stroke="#374151" strokeWidth="10" />
      <path d="M50,100 C 60,70 40,60 60,40 C 80,20 50,10 70,0" fill="none" stroke="#1f2937" strokeWidth="12" />
      <path d="M0,100 Q 15,85 10,70 T 30,60 T 15, 45" fill="currentColor" />
    </svg>
  );
}
