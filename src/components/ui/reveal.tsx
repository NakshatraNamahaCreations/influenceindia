"use client";

import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  id,
  mode = "fade",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
  id?: string;
  /** "fade" moves the block itself; "trigger" only fires child animations. */
  mode?: "fade" | "trigger";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // React regenerates the tree after a hydration mismatch (a browser
    // extension rewriting the DOM is the usual cause), which can leave an
    // observer callback in flight against a fiber that is no longer mounted —
    // the guard keeps that from becoming a state update on a dead component.
    let live = true;

    // no IntersectionObserver (very old browser, some embedded webviews):
    // reveal through the DOM rather than state, so the content is never left
    // faded out for good and no cascading render is triggered
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!live) return;
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => {
      live = false;
      observer.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${mode === "trigger" ? "reveal-trigger" : ""} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
