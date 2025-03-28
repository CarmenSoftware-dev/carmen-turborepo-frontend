"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          success: "group-[.toaster]:bg-background group-[.toaster]:text-white group-[.toaster]:border-emerald-600 group-[.toaster]:text-emerald-600",
          error: "group-[.toaster]:bg-background group-[.toaster]:text-white group-[.toaster]:border-rose-600 group-[.toaster]:text-rose-600",
          info: "group-[.toaster]:bg-background group-[.toaster]:text-white group-[.toaster]:border-sky-600 group-[.toaster]:text-sky-600",
          warning: "group-[.toaster]:bg-background group-[.toaster]:text-white group-[.toaster]:border-amber-600 group-[.toaster]:text-amber-600",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
