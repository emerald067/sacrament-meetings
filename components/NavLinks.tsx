'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/' },
  { name: 'All Meetings', href: '/meetings' },
  { name: 'Current Meeting', href: '/meetings/current' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="bg-blue-800 px-6 py-3">
      <ul className="mx-auto max-w-6xl flex flex-wrap gap-6">
        {links.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href === '/meetings' &&
              pathname.startsWith('/meetings/') &&
              pathname !== '/meetings/current');

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-white hover:text-yellow-300 transition-colors ${
                  isActive ? 'font-bold underline' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}