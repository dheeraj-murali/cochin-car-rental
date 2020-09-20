import React from "react"
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaLinkedin,
} from "react-icons/fa"

export const Social = (props: SocialProps) => {
  const { link, item } = props

  const getIcon = (
    item: "facebook" | "twitter" | "instagram" | "whatsApp" | "linkedIn"
  ) => {
    if (item === "facebook") return <FaFacebookSquare />
    if (item === "twitter") return <FaTwitterSquare />
    if (item === "instagram") return <FaInstagramSquare />
    if (item === "whatsApp") return <FaWhatsappSquare />
    if (item === "linkedIn") return <FaLinkedin />
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-3xl text-white hover:text-wine"
    >
      {getIcon(item)}
    </a>
  )
}

declare interface SocialProps {
  link: string
  item: "facebook" | "twitter" | "instagram" | "whatsApp" | "linkedIn"
}
