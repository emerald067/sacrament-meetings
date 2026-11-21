import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-xl bg-white p-8 shadow-md">
        <h1 className="text-4xl font-bold text-blue-900">
          Sacrament Meeting Planner
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Organize, review, and print sacrament meeting programs.
          Access meeting details, hymns, prayers, announcements,
          and speaker information in one place.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/meetings"
            className="rounded-md bg-blue-900 px-6 py-3 text-white hover:bg-blue-800"
          >
            View All Meetings
          </Link>

          <Link
            href="/meetings/current"
            className="rounded-md border border-blue-900 px-6 py-3 text-blue-900 hover:bg-blue-50"
          >
            Current Meeting
          </Link>
        </div>
      </div>
    </section>
  );
}