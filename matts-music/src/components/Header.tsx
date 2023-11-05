"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const navItemStyle = `border-1 border-zinc-900 hover:border-none overflow-hidden rounded-2xl py-1 px-3  hover:bg-gradient-to-l hover:font-semibold from-cyan-300 to-fuchsia-600 hover:text-zinc-900 transition-all duration-300 ease-in-out cursor-pointer`;
  const navItemActiveStyle = `border-none border-zinc-900 overflow-hidden rounded-2xl py-1 px-3 bg-gradient-to-l font-semibold from-cyan-300 to-fuchsia-600 text-zinc-900`;
  const pathName = usePathname();

  return (
    <>
      <div>
        <h1 className="text-6xl font-semibold bg-gradient-to-r from-cyan-300 to-fuchsia-600 bg-clip-text text-transparent">
          Matt&apos;s Albums
        </h1>
        <nav className="pt-6">
          <ul className="flex justify-center gap-2 text-white">
            <li>
              <Link
                href={"/"}
                className={pathName === "/" ? navItemActiveStyle : navItemStyle}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href={"/albums"}
                className={
                  pathName === "/albums" ? navItemActiveStyle : navItemStyle
                }
              >
                Albums
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
