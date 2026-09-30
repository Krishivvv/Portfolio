// Motion tokens — the single source for JS (motion) and CSS (exposed as custom
// properties on <html> by the root layout).

export const ease = [0.16, 1, 0.3, 1] as const;
export const easeInOut = [0.65, 0, 0.35, 1] as const;
const easeCss = `cubic-bezier(${ease.join(", ")})`;

export const duration = {
  press: 0.12,
  hover: 0.2,
  reveal: 0.7,
  menu: 0.55,
} as const;

export const stagger = 0.06;

// Press and layout motion use springs; reveals use the ease above.
export const spring = { type: "spring", stiffness: 420, damping: 38, mass: 0.8 } as const;
export const softSpring = { type: "spring", stiffness: 180, damping: 26, mass: 0.9 } as const;

export const motionCssVars = {
  "--ease-out": easeCss,
  "--dur-press": `${duration.press * 1000}ms`,
  "--dur-hover": `${duration.hover * 1000}ms`,
  "--dur-reveal": `${duration.reveal * 1000}ms`,
  "--stagger": `${stagger * 1000}ms`,
} as React.CSSProperties;
