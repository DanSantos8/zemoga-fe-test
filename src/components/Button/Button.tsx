import { cn } from "@/lib/utils"
import React, { ReactNode, useCallback, useMemo } from "react"

const variants = {
  primary: "px-5 py-1 border-white border-[1px]",
  ["vote-up"]: "bg-green-positive",
  ["vote-down"]: "bg-yellow-negative",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "vote-up" | "vote-down"
  children?: ReactNode
  label?: string
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  label = "",
  className,
  onClick,
  children,
  disabled,
  ...rest
}) => {
  const renderOverlay = useCallback(
    () => (
      <div
        className={cn(
          `absolute left-0 top-0 h-full w-full bg-black opacity-60`,
          {
            "bg-light-gray-background": disabled,
          }
        )}
      />
    ),
    [disabled]
  )
  return (
    <button
      className={cn(
        `flex items-center relative justify-center min-w-7 min-h-7 text-white focus:border-white focus:border-[1px] ${variants[variant as keyof typeof variants]}`,
        className
      )}
      onClick={onClick}
      {...rest}
    >
      {variant === "primary" && renderOverlay()}
      {children && children}
      {label && <span className="z-20">{label}</span>}
    </button>
  )
}

export default Button
