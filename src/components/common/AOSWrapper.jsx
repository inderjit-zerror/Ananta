"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSWrapper() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return null;
}