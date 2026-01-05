import React from "react";
import clsx from "clsx";

interface DashboardButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export default function DashboardButton({
  children,
  variant = "outline",
  className,
  ...props
}: DashboardButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "py-2 px-6 rounded-full font-medium transition text-sm shadow-xs shadow-purple",
        variant === "primary" &&
          "bg-purple text-black hover:opacity-90",
        variant === "outline" &&
          "border border-white/10 text-white hover:bg-white/10",
        className
      )}
    >
      {children}
    </button>
  );
}
