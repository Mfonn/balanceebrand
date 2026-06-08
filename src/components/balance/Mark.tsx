import React from "react";
import mark from "@/assets/balance-mark.png";

export const Mark: React.FC<{ className?: string; spin?: boolean }> = ({ className = "w-10 h-10", spin = false }) => (
  <img
    src={mark}
    alt="balance_ee flower mark"
    className={`${className} ${spin ? "animate-spin-slow" : ""}`}
    width={512}
    height={512}
  />
);
