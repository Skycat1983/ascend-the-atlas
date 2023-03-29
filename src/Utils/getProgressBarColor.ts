const gradientColors = [
  "#4caf50", // green
  "#81c784",
  "#a5d6a7",
  "#ffeb3b", // yellow
  "#fdd835",
  "#ffc107",
  "#f44336", // red
];

const lerpColor = (a: string, b: string, amount: number) => {
  const ah = parseInt(a.replace(/#/g, ""), 16),
    ar = ah >> 16,
    ag = (ah >> 8) & 0xff,
    ab = ah & 0xff,
    bh = parseInt(b.replace(/#/g, ""), 16),
    br = bh >> 16,
    bg = (bh >> 8) & 0xff,
    bb = bh & 0xff,
    rr = ar + amount * (br - ar),
    rg = ag + amount * (bg - ag),
    rb = ab + amount * (bb - ab);

  return `#${(((1 << 24) + (rr << 16) + (rg << 8) + rb) | 0)
    .toString(16)
    .slice(1)}`;
};

export const getProgressBarColor = (progress: number) => {
  const gradientIndex = Math.floor(
    (progress / 100) * (gradientColors.length - 1)
  );
  const gradientProgress = ((progress / 100) * (gradientColors.length - 1)) % 1;

  return lerpColor(
    gradientColors[gradientIndex],
    gradientColors[gradientIndex + 1],
    gradientProgress
  );
};
