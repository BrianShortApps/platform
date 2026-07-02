import type { PortalTheme } from "../types";

export class ThemeService {
  private readonly theme: PortalTheme;

  constructor(theme: PortalTheme = "dark") {
    this.theme = theme;
  }

  getTheme(): PortalTheme {
    return this.theme;
  }

  getThemeClassName(): string {
    return `portal-theme-${this.theme}`;
  }
}
