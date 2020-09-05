import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

export const Link = (props: LinkProps) => {
  const { children, to } = props

  return (
    <AnchorLink href={to} className="hover:text-wine">
      {children}
    </AnchorLink>
  )
}

declare interface LinkProps {
  children?: React.ReactNode
  to: string
}
