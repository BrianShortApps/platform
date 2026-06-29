import { darkTheme } from "./dark";
import { lightTheme } from "./light";

export type ThemeName = "dark" | "light";

export const themes = {
  dark: darkTheme,
  light: lightTheme,
} as const;

export type Theme = (typeof themes)[ThemeName];

const themeVariableMap: Record<keyof Theme["colors"], string> = {
  brandPrimary: "--color-brand-primary",
  brandSecondary: "--color-brand-secondary",
  brandAccent: "--color-brand-accent",

  backgroundApp: "--color-bg-app",
  backgroundSurface: "--color-bg-surface",
  backgroundElevated: "--color-bg-elevated",
  backgroundInset: "--color-bg-inset",

  borderSubtle: "--color-border-subtle",
  borderStrong: "--color-border-strong",

  textPrimary: "--color-text-primary",
  textSecondary: "--color-text-secondary",
  textMuted: "--color-text-muted",
  textInverse: "--color-text-inverse",
};

export function applyTheme(themeName: ThemeName) {
  const theme = themes[themeName];
  const root = document.documentElement;

  root.dataset.theme = theme.name;

  Object.entries(theme.colors).forEach(([tokenName, tokenValue]) => {
    const cssVariable = themeVariableMap[tokenName as keyof Theme["colors"]];
    root.style.setProperty(cssVariable, tokenValue);
  });
}