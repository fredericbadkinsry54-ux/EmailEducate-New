
import { cn } from "@/lib/utils";

export function WavyBg({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 w-full h-full", className)}>
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <path
          fill="hsl(var(--primary) / 0.05)"
          fillOpacity="1"
          d="M0,224L48,229.3C96,235,192,245,288,218.7C384,192,480,128,576,117.3C672,107,768,149,864,160C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
        <path
          fill="hsl(var(--primary) / 0.1)"
          fillOpacity="1"
          d="M0,192L60,170.7C120,149,240,107,360,117.3C480,128,600,192,720,208C840,224,960,192,1080,170.7C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
