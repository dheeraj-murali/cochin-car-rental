import React from "react"
import {
  FaCar,
  FaCheckDouble,
  FaClock,
  FaDollarSign,
  FaExclamation,
  FaLanguage,
} from "react-icons/fa"

export const config = {
  title: `What makes us special`,
  subtitle: ``,
  content: [
    {
      title: `Fixed rates`,
      content: `Never worry about unpredictable fair ever again. We'll tell you what you have to pay beforehand and that is all you have to pay.`,
      icon: <FaDollarSign />,
    },
    {
      title: `Reliable Transport`,
      content: `On-time, every time! Our team of expert drivers not only makes sure that you are safe and reach your destination on time, but also that you enjoy the time you are with us.`,
      icon: <FaCar />,
    },
    {
      title: `Free Cancellation`,
      content: `We understand that plans change, and that's okay. Cancel your bookings at any time at no extra cost.`,
      icon: <FaExclamation />,
    },
    {
      title: `Multilingual Drivers`,
      content: `We train our drivers to be able to speak your language so that you can communicate in yours, and never worry about missing the point.`,
      icon: <FaLanguage />,
    },
    {
      title: `Quality Vehicles`,
      content: `We make sure that our fleets are well maintained and serviced so that you can enjoy a safe and relaxing journey.`,
      icon: <FaCheckDouble />,
    },
    {
      title: `24H Customer Service`,
      content: `We are here day in and day out. Call us at any time. We are here to answer all of your queries.`,
      icon: <FaClock />,
    },
  ],
}
