'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  return (
    <div className="w-32 min-h-screen flex-col   bg-green-700 flex items-center justify-center">
      <NavbarButton name={'Home'} path="/" />
      <NavbarButton name={'Sign in'} path="/signin" />
      <NavbarButton name={'Sign out'} path="/signout" />
    </div>
  );
}

function NavbarButton({ name, path }: { name: string; path: string }) {
  let currentPath = usePathname();
  let bg = '';
  currentPath = currentPath.replace('/', '');
  if (
    path.toLowerCase() == currentPath.toLowerCase() ||
    (path.toLowerCase() == 'home' && currentPath.toLowerCase() == '')
  ) {
    bg = 'bg-green-900';

    console.log('ITS DARK');
  }

  return (
    <Link href={path} className={`min-w-full flex justify-center ${bg} p-2 hover:bg-green-950 hover:cursor-pointer`}>
      {name}
    </Link>
  );
}
