// Motion tokens — the single source for JS (motion) and CSS (exposed as custom
// properties on <html> by the root layout).

export const ease = [0.16, 1, 0.3, 1] as const;
const easeCss = `cubic-bezier(${ease.join(", ")})`;

export const duration = {
  press: 0.12,
  hover: 0.18,
  reveal: 0.5,
} as const;

export const stagger = 0.07;

export const motionCssVars = {
  "--ease-out": easeCss,
  "--dur-press": `${duration.press * 1000}ms`,
  "--dur-hover": `${duration.hover * 1000}ms`,
  "--dur-reveal": `${duration.reveal * 1000}ms`,
  "--stagger": `${stagger * 1000}ms`,
} as React.CSSProperties;
