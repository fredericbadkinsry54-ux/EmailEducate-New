
"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const tools = [
  { name: "Mailchimp", url: "https://www.mailchimp.com/" },
  { name: "GetResponse", url: "https://www.getresponse.com/" },
  { name: "MailerLite", url: "https://www.mailerlite.com/" },
  { name: "Moosend", url: "https://moosend.com/" },
  { name: "Omnisend", url: "https://www.omnisend.com/" },
  { name: "SendPulse", url: "https://sendpulse.com/" },
  { name: "Mailjet", url: "https://www.mailjet.com/" },
  { name: "EmailOctopus", url: "https://emailoctopus.com/" },
  { name: "ActiveCampaign", url: "https://www.activecampaign.com/" },
];

interface Position {
  x: number;
  y: number;
}

export function ToolIntegrations() {
  const [positions, setPositions] = React.useState<Position[]>([]);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    const calculatePositions = () => {
      const newPositions: Position[] = [];
      const numTools = tools.length;
      const radius = 180;
      for (let i = 0; i < numTools; i++) {
        const angle = (i / numTools) * 2 * Math.PI;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        newPositions.push({ x, y });
      }
      setPositions(newPositions);
    };

    calculatePositions();
    setIsMounted(true);
  }, []);

  return (
    <section className="bg-background text-foreground py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Smarter Email Marketing Starts With <span className="brevo-auto">Brevo</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            EmailEducate helps you master <span className="brevo-auto">Brevo</span>’s powerful tools — from campaigns to automation, segmentation, and deliverability. See how <span className="brevo-auto">Brevo</span> compares with other platforms and why it remains the most flexible choice for growing businesses.
          </p>
        </div>
        <div className="mt-24 flex justify-center">
          <div className="relative flex items-center justify-center w-96 h-96">
            
            {/* Center Logo */}
            <Link href="https://www.brevo.com/" target="_blank" rel="noopener noreferrer" className="z-10">
                <div className="w-36 h-36 bg-card border-2 border-primary/50 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                    <span className="text-2xl font-bold text-primary"><span className="brevo-auto">Brevo</span></span>
                </div>
            </Link>

            {/* Orbiting Tools */}
            {isMounted && positions.length > 0 && tools.map((tool, i) => {
              const { x, y } = positions[i];
              
              return (
                <div 
                  key={tool.name} 
                  className="absolute transition-all duration-300"
                  style={{ 
                    transform: `translate(${x}px, ${y}px)`,
                    opacity: isMounted ? 1 : 0,
                    animation: `orbit 30s linear infinite`,
                    animationDelay: `-${(30 / tools.length) * i}s`
                  }}
                >
                    <Link href={tool.url} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="bg-card/80 backdrop-blur-sm border-border hover:bg-muted transition-all duration-300 shadow-md animate-button-orbit">
                            {tool.name}
                        </Button>
                    </Link>
                </div>
              );
            })}

            {/* Background Rings */}
             <div className="absolute inset-0 border-2 border-border/30 rounded-full animate-pulse-slow"></div>
             <div className="absolute inset-[-40px] border border-border/20 rounded-full animate-pulse-slower"></div>
             <div className="absolute inset-[-80px] border border-border/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
