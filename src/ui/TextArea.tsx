import React from "react"
import TextareaAutosize, {
  type TextareaAutosizeProps,
} from "react-textarea-autosize"
import { cn } from "../lib/utils"

export default React.forwardRef<
  HTMLTextAreaElement,
  TextareaAutosizeProps & React.RefAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <TextareaAutosize
      className={cn(
        "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm",
        "disabled:cursor-not-allowed disabled:opacity-50 min-h-28",
        className,
      )}
      ref={ref}
      minRows={2}
      {...props}
    />
  )
})
