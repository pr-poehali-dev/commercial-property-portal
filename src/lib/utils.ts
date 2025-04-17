import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Компонент для скрытия элементов визуально, но оставляя их доступными для скринридеров
export const VisuallyHidden = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <span
      className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0"
      style={{
        clip: "rect(0, 0, 0, 0)",
        clipPath: "inset(50%)",
      }}
    >
      {children}
    </span>
  )
}