import { Marquee } from "@/components/ui/marquee";
import { site, ticker, tickerNews } from "@/content/site";

export function TickerBar() {
  const items = [...ticker, ...tickerNews].map((t) => t);

  return (
    <div className="invert-section relative z-50 border-b border-line-invert">
      <div className="flex h-9 items-center">
        <span className="label hidden shrink-0 items-center gap-2 border-r border-line-invert px-5 text-paper/50 md:flex">
          Influence India
        </span>
        <Marquee
          items={items}
          duration={55}
          className="flex-1"
          itemClassName="label px-6 text-paper/70 before:mr-6 before:text-accent before:content-['/']"
        />
        <span className="label hidden shrink-0 items-center gap-2 border-l border-line-invert px-5 text-accent lg:flex">
          {site.tagline}
        </span>
      </div>
    </div>
  );
}
