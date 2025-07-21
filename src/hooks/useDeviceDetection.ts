"use client";
import { useDeviceStore } from "@/stores/deviceStore";
import { useEffect } from "react";

export const useDeviceDetection = () => {
  const setIsMobile = useDeviceStore((s) => s.setIsMobile);
  const setIsTablet = useDeviceStore((s) => s.setIsTablet);
  const setIsDesktop = useDeviceStore((s) => s.setIsDesktop);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 640);
      setIsTablet(width > 640 && width <= 1024);
      setIsDesktop(width > 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobile, setIsTablet, setIsDesktop]);
};
