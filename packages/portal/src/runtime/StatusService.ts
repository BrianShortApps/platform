import type { PortalStatusItem } from "../types";

export class StatusService {
  private readonly baseStatusItems: PortalStatusItem[];

  constructor(baseStatusItems: PortalStatusItem[] = []) {
    this.baseStatusItems = [...baseStatusItems];
  }

  getStatusItems(
    moduleStatusItems: PortalStatusItem[] = [],
  ): PortalStatusItem[] {
    return [...this.baseStatusItems, ...moduleStatusItems];
  }
}
