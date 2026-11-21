import { Suspense } from "react";
import MeetingDetails from "./MeetingDetails";

interface MeetingPageProps {
  params: Promise<{ id: string }>;
}

export default function MeetingPage({ params }: MeetingPageProps) {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-md">
          <div className="animate-pulse space-y-5">
            <div className="mx-auto h-8 w-64 rounded bg-gray-200" />
            <div className="mx-auto h-5 w-40 rounded bg-gray-200" />
            <div className="mt-8 h-20 rounded bg-gray-100" />
            <div className="h-32 rounded bg-gray-100" />
            <div className="h-24 rounded bg-gray-100" />
          </div>
        </div>
      }
    >
      <MeetingDetails params={params} />
    </Suspense>
  );
}