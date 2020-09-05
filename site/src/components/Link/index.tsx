import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

export const Link = (props: LinkProps) => {
  const { text, to } = props

  return <AnchorLink href={to}>{text}</AnchorLink>
}
