import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

export const Link = (props: LinkProps) => {
  const { children, to, className } = props

  return (
    <AnchorLink href={to} className={className}>
      {children}
    </AnchorLink>
  )
}

declare interface LinkProps {
  children?: React.ReactNode
  to: string
  className: string
}
