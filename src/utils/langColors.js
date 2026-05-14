// Gradient from/to colors + monospace symbol for each primary language.
// textDark: true means the header text should be dark (for light backgrounds like JS yellow).
const LANG_MAP = {
  JavaScript:        { from: "#f59e0b", to: "#b45309", symbol: "JS",    textDark: true  },
  TypeScript:        { from: "#3b82f6", to: "#1d4ed8", symbol: "TS",    textDark: false },
  HTML:              { from: "#f97316", to: "#c2410c", symbol: "<>",    textDark: false },
  CSS:               { from: "#a855f7", to: "#7c3aed", symbol: "{ }",   textDark: false },
  Python:            { from: "#3b82f6", to: "#1e40af", symbol: "Py",    textDark: false },
  Ruby:              { from: "#ef4444", to: "#b91c1c", symbol: "Rb",    textDark: false },
  Shell:             { from: "#22c55e", to: "#15803d", symbol: "$>",    textDark: false },
  Go:                { from: "#06b6d4", to: "#0e7490", symbol: "Go",    textDark: false },
  Java:              { from: "#f59e0b", to: "#92400e", symbol: "Jv",    textDark: false },
  PHP:               { from: "#6366f1", to: "#4338ca", symbol: "PHP",   textDark: false },
  "C#":              { from: "#8b5cf6", to: "#6d28d9", symbol: "C#",    textDark: false },
  "C++":             { from: "#0ea5e9", to: "#0369a1", symbol: "C++",   textDark: false },
  "Jupyter Notebook":{ from: "#f97316", to: "#c2410c", symbol: "ipynb", textDark: false },
  Dockerfile:        { from: "#0ea5e9", to: "#0369a1", symbol: "🐳",    textDark: false },
};

const DEFAULT = { from: "#531dab", to: "#3d0e8f", symbol: "</>", textDark: false };

export const getLangStyle = (language) => LANG_MAP[language] ?? DEFAULT;

export const formatRepoName = (name) =>
  name.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
