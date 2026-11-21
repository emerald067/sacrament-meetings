import MeetingCard from "@/components/MeetingCard";
import type { SacramentMeeting } from "@/lib/types";

export default async function MeetingsPage() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const response = await fetch(`${baseUrl}/api/meetings`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch meetings.");
  }

  const meetings: SacramentMeeting[] = await response.json();

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold text-blue-900">
        All Sacrament Meetings
      </h1>

      {meetings.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {meetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </div>
      ) : (
        <p className="rounded-lg bg-white p-6 text-gray-600 shadow-sm">
          No sacrament meetings are available.
        </p>
      )}
    </div>
  );
}