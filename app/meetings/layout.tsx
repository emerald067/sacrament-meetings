import type { ReactNode } from "react";

interface MeetingsLayoutProps {
  children: ReactNode;
}

export default function MeetingsLayout({
  children,
}: MeetingsLayoutProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-8">
      {children}
    </section>
  );
}