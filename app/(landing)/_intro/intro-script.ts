// Runs inline, before the hero is parsed, so the decision is made before first
// paint and nothing waits for hydration. It sets html[data-intro] to "play" or
// "done"; CSS in landing.css does the rest. Skip controls are handled here too
// (click, Enter/Space, Esc, and any scroll intent) so they work before React loads.
// window.__intro.play() is used by the footer's "Replay intro".
import { INTRO_KEY, INTRO_MS } from "./constants";

export const introScript = `(function () {
  var d = document.documentElement, KEY = ${JSON.stringify(INTRO_KEY)}, ended = true, timer = 0;
  var scrollKeys = { ArrowDown: 1, ArrowUp: 1, PageDown: 1, PageUp: 1, Home: 1, End: 1, " ": 1 };
  function remember() { try { localStorage.setItem(KEY, "true"); } catch (e) {} }
  function seen() { try { return localStorage.getItem(KEY) === "true"; } catch (e) { return false; } }
  function reduced() { return !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches); }
  function listen(on) {
    var m = on ? "addEventListener" : "removeEventListener", p = { passive: true };
    window[m]("wheel", onScroll, p); window[m]("touchmove", onScroll, p); window[m]("scroll", onScroll, p);
    window[m]("keydown", onKey, true); document[m]("click", onClick, true);
  }
  function end(focusMain) {
    if (ended) return;
    ended = true; clearTimeout(timer); listen(false);
    var b = document.getElementById("skip-intro");
    var hadFocus = b && document.activeElement === b;
    d.setAttribute("data-intro", "done");
    remember();
    if (focusMain || hadFocus) { var main = document.getElementById("main"); if (main) main.focus({ preventScroll: true }); }
  }
  function onScroll() { end(false); }
  function onKey(e) {
    if (e.key === "Escape") { end(true); return; }
    if (scrollKeys[e.key] && !(e.key === " " && e.target && e.target.id === "skip-intro")) end(false);
  }
  function onClick(e) { if (e.target && e.target.closest && e.target.closest("#skip-intro")) end(true); }
  function play(replay) {
    ended = false;
    d.setAttribute("data-intro", "play");
    listen(true);
    timer = setTimeout(function () { end(false); }, ${INTRO_MS});
    if (replay) { var b = document.getElementById("skip-intro"); if (b) b.focus({ preventScroll: true }); }
  }
  window.__intro = {
    play: function () {
      if (reduced()) return;
      window.scrollTo(0, 0);
      requestAnimationFrame(function () { requestAnimationFrame(function () { play(true); }); });
    }
  };
  if (seen() || reduced()) d.setAttribute("data-intro", "done"); else play(false);
})();`;
