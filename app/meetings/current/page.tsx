import { getMeetings } from "@/lib/meetings-db";
import { redirect } from "next/navigation";

export default function CurrentMeetingPage() {
  const meetings = [...getMeetings()].sort(
    (a, b) => b.date.localeCompare(a.date)
  );

  const latestMeeting = meetings[0];

  if (!latestMeeting) {
    redirect("/meetings");
  }

  redirect(`/meetings/${latestMeeting.id}`);
}