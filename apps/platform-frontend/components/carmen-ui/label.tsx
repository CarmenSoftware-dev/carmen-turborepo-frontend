"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type LabelProps = Omit<React.ComponentPropsWithoutRef<"label">, "htmlFor"> & {
  htmlFor: string
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, htmlFor, ...props }, ref) => (
    <label
      ref={ref}
      htmlFor={htmlFor}
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
)

Label.displayName = "Label"

export { Label }
