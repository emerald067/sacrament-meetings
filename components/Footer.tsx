import { connection } from "next/server";

export default async function Footer() {
  await connection();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-blue-950 px-6 py-6 text-white">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm">Sacrament Meeting Planner</p>

        <p className="mt-2 text-xs text-gray-300">
          &copy; {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}