import { DashboardClient } from "@/components/dashboard/DashboardClient";
import { lessons } from "@/lib/lessons";

export default function DashboardPage() {
  return <DashboardClient lessons={lessons} />;
}
