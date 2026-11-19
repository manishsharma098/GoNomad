import { Link, useRouter, useRouterState } from "@tanstack/react-router";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";

import type { AppPath } from "@/app/data/site";

type Phase = "idle" | "closing" | "opening";

const FLIP_MS = 700;

type TripParams = { tripId: string };

const TransitionContext = createContext<{
  go: (to: AppPath | "/destination/$tripId", params?: TripParams) => void;
}>({ go: () => {} });

export function usePageTransition() {
  return useContext(TransitionContext);
}

/** Wraps the app and plays a two-sided flip (doors from left + right) between pages. */
export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [phase, setPhase] = useState<Phase>("idle");
  const busy = useRef(false);
  const timers = useRef<number[]>([]);

  useEffect(() => () => timers.current.forEach((t) => window.clearTimeout(t)), []);

  const go = useCallback(
    (to: AppPath | "/destination/$tripId", params?: TripParams) => {
      const target = params ? `/destination/${params.tripId}` : to;
      if (busy.current) return;
      if (target === pathname) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      busy.current = true;
      setPhase("closing");
      timers.current.push(
        window.setTimeout(async () => {
          await router.navigate(
            params ? { to: "/destination/$tripId", params } : { to },
          );
          window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
          // hold closed a beat so the new page paints behind the doors
          timers.current.push(
            window.setTimeout(() => {
              setPhase("opening");
              timers.current.push(
                window.setTimeout(() => {
                  setPhase("idle");
                  busy.current = false;
                }, FLIP_MS),
              );
            }, 120),
          );
        }, FLIP_MS),
      );
    },
    [pathname, router],
  );

  return (
    <TransitionContext.Provider value={{ go }}>
      {children}
      <div className="flip-stage" data-phase={phase} aria-hidden="true">
        <div className="flip-panel flip-panel--left">
          <span className="flip-word pr-1">Go</span>
        </div>
        <div className="flip-panel flip-panel--right">
          <span className="flip-word">Nomad</span>
        </div>
      </div>
    </TransitionContext.Provider>
  );
}

type TransitionLinkProps = {
  to: AppPath | "/destination/$tripId";
  params?: TripParams;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
  activeOptions?: { exact: boolean };
  "aria-label"?: string;
};

/** A real link (href, cmd-click still work) that plays the flip before changing page. */
export function TransitionLink({
  to,
  params,
  className,
  children,
  onNavigate,
  activeOptions,
  ...rest
}: TransitionLinkProps) {
  const { go } = usePageTransition();
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    onNavigate?.();
    go(to, params);
  };
  const activity = activeOptions ? { activeOptions } : {};
  if (params) {
    return (
      <Link
        to="/destination/$tripId"
        params={params}
        className={className}
        onClick={handleClick}
        {...activity}
        {...rest}
      >
        {children}
      </Link>
    );
  }
  return (
    <Link
      to={to as AppPath}
      className={className}
      onClick={handleClick}
      {...activity}
      {...rest}
    >
      {children}
    </Link>
  );
}