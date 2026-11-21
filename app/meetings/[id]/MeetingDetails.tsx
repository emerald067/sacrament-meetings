import MeetingDetail from "@/components/MeetingDetail";
import type { SacramentMeeting } from "@/lib/types";
import { notFound } from "next/navigation";

interface MeetingDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function MeetingDetails({
  params,
}: MeetingDetailsProps) {
  const { id } = await params;

  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const response = await fetch(
    `${baseUrl}/api/meetings/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    notFound();
  }

  const meeting: SacramentMeeting = await response.json();

  return <MeetingDetail meeting={meeting} />;
}