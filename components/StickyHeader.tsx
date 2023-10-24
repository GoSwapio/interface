import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ThemeToggler } from "./ThemeToggler";

export default function StickyHeader() {
  return (
    <header role="header">
      <div className="fixed w-screen top-0 py-2 px-2">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            <Image
              src="https://via.placeholder.com/150"
              width={50}
              height={50}
              alt="logo"
            />
            <ul className="flex items-center ml-4 space-x-4">
              <li>
                <Link href="/">Swap</Link>
              </li>
              <li>
                <Link href="/pools">Pools</Link>
              </li>
              <li>
                <Link href="/staking">Staking</Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-2">
            <Button size="sm">connect</Button>
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
}
