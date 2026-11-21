import { getMeetingById } from "@/lib/meetings-db";

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(
  request: Request,
  { params }: RouteContext
) {
  const { id } = await params;

  const meetingId = Number(id);

  // Check whether the ID is a valid positive integer.
  if (!Number.isInteger(meetingId) || meetingId <= 0) {
    return Response.json(
      { error: "Invalid meeting ID" },
      { status: 400 }
    );
  }

  // Look for the meeting in our data.
  const meeting = getMeetingById(meetingId);

  // Return 404 if the meeting does not exist.
  if (!meeting) {
    return Response.json(
      { error: "Meeting not found" },
      { status: 404 }
    );
  }

  // Return the meeting when found.
  return Response.json(meeting, { status: 200 });
}