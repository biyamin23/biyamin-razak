"use client";

import { useState } from "react";
import { Logo } from "./doodles";
import { TelegramButton } from "./TelegramButton";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#creations", label: "Creations" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
      <a href="#top" className="flex items-center gap-2" aria-label="Biyamin Razak, back to top">
        <Logo className="h-11 w-auto" />
        <span className="border-l-[3px] border-ink pl-2.5 text-[1.05rem] leading-[1.05] font-extrabold">
          Biyamin
          <br />
          Razak
        </span>
      </a>

      <nav aria-label="Main" className="hidden md:block">
        <ul className="flex gap-7 font-semibold">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="decoration-sun decoration-[5px] underline-offset-6 hover:underline">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden md:block">
        <TelegramButton label="DM me" className="bg-sun" />
      </div>

      <button
        type="button"
        className="btn bg-sun px-4 md:hidden"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-4 top-full rounded-[18px] border-[3px] border-ink bg-paper p-5 shadow-hard md:hidden"
        >
          <ul className="flex flex-col gap-1 text-lg font-bold">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="block py-2" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <TelegramButton label="DM me on Telegram" className="mt-3 bg-sun" />
        </div>
      )}
    </header>
  );
}
