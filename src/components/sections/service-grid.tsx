import Link from "next/link";

import { ArrowIcon } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import type { Service } from "@/content/services";

export function ServiceGrid({
  services,
  base = "/what-we-do",
}: {
  services: readonly Service[];
  base?: string;
}) {
  return (
    <div className="grid border-t border-line md:grid-cols-2">
      {services.map((service, i) => (
        <Reveal
          key={service.id}
          delay={(i % 2) * 90}
          className={`border-b border-line ${i % 2 === 0 ? "md:border-r" : ""}`}
        >
          <Link
            href={`${base}#${service.id}`}
            className="group flex h-full flex-col justify-between gap-10 p-8 transition-colors duration-500 hover:bg-ink hover:text-paper md:p-11"
          >
            <div className="flex items-start justify-between gap-6">
              <span className="label text-ink-30 transition-colors duration-500 group-hover:text-paper/55">
                {service.index}
              </span>
              <ArrowIcon className="mt-1 h-4 w-4 -rotate-45 text-ink-30 transition-all duration-500 group-hover:rotate-0 group-hover:text-paper" />
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="display d4">
                <span className="block">{service.title[0]}</span>
                <span className="block transition-colors duration-500 group-hover:text-accent">
                  {service.title[1]}
                </span>
              </h3>
              <p className="max-w-md text-[0.95rem] leading-relaxed text-ink-70 transition-colors duration-500 group-hover:text-paper/85">
                {service.summary}
              </p>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
