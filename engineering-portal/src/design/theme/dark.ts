import { colors } from "../tokens";

export const darkTheme = {
  name: "dark",
  colors: {
    brandPrimary: colors.brand.primary,
    brandSecondary: colors.brand.secondary,
    brandAccent: colors.brand.accent,

    backgroundApp: colors.background.app,
    backgroundSurface: colors.background.surface,
    backgroundElevated: colors.background.elevated,
    backgroundInset: colors.background.inset,

    borderSubtle: colors.border.subtle,
    borderStrong: colors.border.strong,

    textPrimary: colors.text.primary,
    textSecondary: colors.text.secondary,
    textMuted: colors.text.muted,
    textInverse: colors.text.inverse,
  },
} as const;