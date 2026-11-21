import { connection } from "next/server";

export default async function Header() {
  await connection();

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="bg-blue-900 px-6 py-5 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold">
          Sacrament Meeting Planner
        </h1>
        <p className="text-sm">{currentDate}</p>
      </div>
    </header>
  );
}