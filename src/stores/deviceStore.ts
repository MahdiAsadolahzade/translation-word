import { create } from "zustand";

interface DeviceStoreState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  setIsMobile: (isMobile: boolean) => void;
  setIsTablet: (isTablet: boolean) => void;
  setIsDesktop: (isDesktop: boolean) => void;
}

export const useDeviceStore = create<DeviceStoreState>((set) => ({
  isDesktop: false,
  isMobile: false,
  isTablet: false,
  setIsDesktop(isDesktop) {
    set({ isDesktop: isDesktop });
  },
  setIsMobile(isMobile) {
    set({ isMobile: isMobile });
  },
  setIsTablet(isTablet) {
    set({ isTablet: isTablet });
  },
}));
