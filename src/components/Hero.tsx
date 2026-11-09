"use client";

import { motion, MotionConfig } from "motion/react";
import { site } from "@/content/site";
import { ArrowDown, Bulb, CurlyArrow, Laptop, Sparks } from "./doodles";

const stickers = [
  { label: "AI", className: "left-[24%] top-[2%] -rotate-12 bg-grape text-4xl" },
  { label: "eBooks", className: "left-0 top-[40%] -rotate-12 bg-bubble text-3xl" },
  { label: "Games", className: "right-0 top-[38%] rotate-6 bg-mint text-3xl" },
  { label: "Web Apps", className: "right-[6%] bottom-[6%] -rotate-12 bg-sun text-3xl" },
];

export function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="top" className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-6 pb-16 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:pt-10">
        <div>
          <p className="flex items-end gap-1 font-hand text-2xl text-brand">
            {site.roles}
            <CurlyArrow className="mb-[-1.4rem] hidden w-14 shrink-0 rotate-12 sm:block" />
          </p>

          <h1 className="display relative mt-2 text-[clamp(3rem,12vw,5.4rem)] leading-[0.95] lg:whitespace-nowrap lg:text-[clamp(4rem,6.4vw,5.6rem)] font-extrabold tracking-[-0.035em]">
            Biyamin Razak
            <Sparks className="absolute -top-6 -right-2 hidden w-12 rotate-[100deg] sm:block" />
          </h1>

          <p className="mt-6 font-hand text-[clamp(2.1rem,5vw,3.4rem)] leading-[1.05] -rotate-2">
            Teaching Technology.
            <br />
            Building{" "}
            <span className="relative inline-block text-brand">
              Possibilities.
              <svg viewBox="0 0 300 30" className="absolute -bottom-4 left-0 w-full" aria-hidden="true">
                <motion.path
                  d="M4 18C60 8 130 6 200 12c35 3 70 8 94 4"
                  fill="none"
                  stroke="#ffd43b"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray="300"
                  initial={{ strokeDashoffset: 300 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                />
              </svg>
            </span>
          </p>

          <p className="mt-8 max-w-[34rem] text-lg leading-relaxed">{site.intro}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#creations" className="btn bg-sun">
              Explore my creations
              <ArrowDown className="size-5" />
            </a>
            <a href="#services" className="btn bg-paper">
              Work with me
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-[420/340] w-full max-w-[540px]">
          <Laptop className="absolute inset-x-[6%] top-[10%] w-[88%]" />
          <Bulb className="absolute -top-2 right-0 w-[15%] rotate-12" />
          {stickers.map((s, i) => (
            <motion.span
              key={s.label}
              className={`sticker absolute ${s.className}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 420, damping: 16, delay: 0.5 + i * 0.12 }}
            >
              {s.label}
            </motion.span>
          ))}
        </div>
      </section>
    </MotionConfig>
  );
}
