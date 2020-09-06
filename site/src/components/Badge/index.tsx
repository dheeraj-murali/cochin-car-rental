import React from "react"

export const Badge = (props: BadgeProps) => {
  const { children, big } = props

  if (big)
    return (
      <span className="bg-wineDark text-sm text-white p-3 rounded-lg">
        {children}
      </span>
    )

  return (
    <span className="bg-wineDark text-white px-3 py-1 text-sm font-semibold rounded-full">
      {children}
    </span>
  )
}

declare interface BadgeProps {
  children: React.ReactNode
  big?: boolean
}
