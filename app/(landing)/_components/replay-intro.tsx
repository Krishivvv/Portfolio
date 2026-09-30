"use client";

import { INTRO_KEY } from "../_intro/constants";

type IntroWindow = Window & { __intro?: { play: () => void } };

export function ReplayIntro() {
  return (
    <button
      type="button"
      onClick={() => {
        const intro = (window as IntroWindow).__intro;
        if (intro) {
          intro.play();
          return;
        }
        // Arrived by client navigation, so the inline script never ran: reload.
        try {
          localStorage.removeItem(INTRO_KEY);
        } catch {}
        window.location.reload();
      }}
      className="replay-intro press link inline-flex min-h-11 items-center text-pencil"
    >
      Replay intro
    </button>
  );
}
