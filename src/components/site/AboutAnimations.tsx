import { useEffect, useRef, useState } from "react";

/** Words light up one by one as the paragraph scrolls through the viewport. */
export function ScrollRevealText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(1);
  const words = text.split(" ");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // starts when the top reaches 85% of the screen, ends when the bottom reaches 45%
      const start = vh * 0.85;
      const end = vh * 0.45;
      const total = start - end + rect.height;
      const p = (start - rect.top) / total;
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const lit = progress * words.length;
  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const o = Math.min(1, Math.max(0, lit - i));
        return (
          <span key={i} style={{ opacity: 0.18 + 0.82 * o, transition: "opacity 0.15s linear" }}>
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </p>
  );
}

/** Counts from 0 up to the number inside `value` (e.g. "+3.000", "4+") once visible. */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLElement>(null);
  const match = value.match(/^(\D*)([\d.,]+)(.*)$/);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!match || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const [, prefix = "", num = "", suffix = ""] = match;
    const sep = num.includes(".") ? "." : num.includes(",") ? "," : "";
    const target = Number(num.replace(/[.,]/g, ""));
    const format = (n: number) => {
      const s = String(n);
      return prefix + (sep ? s.replace(/\B(?=(\d{3})+(?!\d))/g, sep) : s) + suffix;
    };
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return; // already visible: keep final
    setDisplay(format(0));
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const dur = 1800;
        const tick = (t: number) => {
          const k = Math.min(1, (t - t0) / dur);
          const eased = 1 - Math.pow(1 - k, 3);
          setDisplay(format(Math.round(target * eased)));
          if (k < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <strong ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>
      {display}
    </strong>
  );
}
