"use client";

import { useEffect } from "react";

const LERP = 0.75;

function nestedCanScroll(event: WheelEvent) {
  const vertical = Math.abs(event.deltaY) >= Math.abs(event.deltaX);
  let node = event.target instanceof Element ? event.target : null;

  while (node && node !== document.body && node !== document.documentElement) {
    const style = window.getComputedStyle(node);
    const overflow = vertical ? style.overflowY : style.overflowX;
    const scrollable = overflow === "auto" || overflow === "scroll" || overflow === "overlay";
    if (scrollable) {
      if (vertical && node.scrollHeight > node.clientHeight + 1) {
        const atTop = node.scrollTop <= 0;
        const atBottom = node.scrollTop + node.clientHeight >= node.scrollHeight - 1;
        if ((event.deltaY < 0 && !atTop) || (event.deltaY > 0 && !atBottom)) return true;
      }
      if (!vertical && node.scrollWidth > node.clientWidth + 1) return true;
    }
    node = node.parentElement;
  }
  return false;
}

/** Wheel scroll eases into place instead of jumping. Touch and the scrollbar stay native. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let current = window.scrollY;
    let target = window.scrollY;
    let frame = 0;
    let applying = false;

    const limit = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const tick = () => {
      current += (target - current) * LERP;
      if (Math.abs(target - current) < 0.5) current = target;
      applying = true;
      window.scrollTo(0, current);
      applying = false;
      frame = current === target ? 0 : window.requestAnimationFrame(tick);
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || nestedCanScroll(event)) return;
      event.preventDefault();
      let delta = event.deltaY;
      if (event.deltaMode === 1) delta *= 16;
      if (event.deltaMode === 2) delta *= window.innerHeight;
      target = Math.min(limit(), Math.max(0, target + delta));
      if (!frame) frame = window.requestAnimationFrame(tick);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };

    function onScroll() {
      if (applying) return;
      current = window.scrollY;
      target = window.scrollY;
    }
  }, []);

  return null;
}
