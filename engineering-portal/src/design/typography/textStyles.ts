import { typography } from "../tokens";

export const textStyles = {
  display: {
    fontFamily: typography.fontFamily.sans,
    fontSize: typography.fontSize["5xl"],
    lineHeight: typography.lineHeight.tight,
    fontWeight: typography.fontWeight.bold,
    letterSpacing: "-0.06em",
  },

  heading: {
    fontFamily: typography.fontFamily.sans,
    fontSize: typography.fontSize["3xl"],
    lineHeight: typography.lineHeight.tight,
    fontWeight: typography.fontWeight.bold,
    letterSpacing: "-0.03em",
  },

  title: {
    fontFamily: typography.fontFamily.sans,
    fontSize: typography.fontSize.xl,
    lineHeight: typography.lineHeight.normal,
    fontWeight: typography.fontWeight.semibold,
  },

  body: {
    fontFamily: typography.fontFamily.sans,
    fontSize: typography.fontSize.base,
    lineHeight: typography.lineHeight.normal,
    fontWeight: typography.fontWeight.regular,
  },

  caption: {
    fontFamily: typography.fontFamily.sans,
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.normal,
    fontWeight: typography.fontWeight.medium,
  },

  mono: {
    fontFamily: typography.fontFamily.mono,
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.normal,
    fontWeight: typography.fontWeight.medium,
  },
} as const;