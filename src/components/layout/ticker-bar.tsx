import { Marquee } from "@/components/ui/marquee";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { contact, site, ticker, tickerNews } from "@/content/site";

const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  `Hi ${site.shortName}, I would like to know more about your staffing services.`,
)}`;

export function TickerBar() {
  const items = [...ticker, ...tickerNews].map((t) => t);

  return (
    <div
      id="top"
      className="invert-section relative z-50 border-b border-line-invert"
    >
      <div className="flex h-9 items-center">
        <span className="label hidden shrink-0 items-center gap-2 border-r border-line-invert px-5 text-paper/80 md:flex">
          Influence India
        </span>

        <Marquee
          items={items}
          duration={55}
          className="flex-1"
          itemClassName="label px-6 text-paper/85 before:mr-6 before:text-accent before:content-['/']"
        />

        <span className="label hidden shrink-0 items-center gap-2 border-l border-line-invert px-5 text-accent xl:flex">
          {site.tagline}
        </span>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat with ${site.shortName} on WhatsApp`}
          className="label group flex h-full shrink-0 items-center gap-2.5 border-l border-line-invert px-4 text-accent transition-colors duration-300 hover:bg-accent hover:text-ink sm:px-5"
        >
          <span className="relative flex h-3.5 w-3.5 items-center justify-center">
            {/* soft pulse behind the glyph, idle only */}
            <span
              aria-hidden="true"
              className="absolute inset-0 animate-ping rounded-full bg-accent opacity-40 group-hover:hidden motion-reduce:animate-none"
            />
            <WhatsAppIcon className="relative h-3.5 w-3.5" />
          </span>
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
