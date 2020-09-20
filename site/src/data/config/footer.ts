import moment from "moment"

export const config: {
  title: string
  text: string
  link: string
  copyright: string
  credits: { username: string; link: string }
  socials: {
    item: "facebook" | "twitter" | "instagram" | "whatsApp" | "linkedIn"
    link: string
  }[]
} = {
  title: "",
  text: "A division of series tours",
  link: ``,
  copyright: `COPYRIGHT © ${moment().year()} SERIES TOURS. ALL RIGHTS RESERVED.`,
  credits: { username: `@_mdrj`, link: "https://twitter.com/_mdrj" },
  socials: [
    {
      item: "facebook",
      link: "https://www.facebook.com/seriestours",
    },
    {
      item: "instagram",
      link: "https://www.instagram.com/seriestours",
    },
    {
      item: "linkedIn",
      link: "",
    },
    {
      item: "twitter",
      link: "",
    },
    {
      item: "whatsApp",
      link: "https://wa.me/+917034520002",
    },
  ],
}
