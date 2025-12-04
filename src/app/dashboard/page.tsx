"use client";

export const dynamicParams = false;
export const fetchCache = "force-no-store";

import dynamicImport from "next/dynamic";
import { lessons } from "@/lib/lessons";

// Dashboard ko client-only banaya (SSR disabled)
const DashboardClient = dynamicImport(
  () =>
    import("@/components/dashboard/DashboardClient").then(
      (m) => m.DashboardClient
    ),
  { ssr: false }
);

export default function DashboardPage() {
  return <DashboardClient lessons={lessons} />;
}
