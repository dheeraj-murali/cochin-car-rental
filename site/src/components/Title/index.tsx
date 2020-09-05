import React from "react"

export const Title = (props: TitleProps) => {
  const { children, black } = props

  return (
    <h1
      className={`text-4xl ${
        black ? "text-black" : "text-white"
      } text-center my-8`}
    >
      {children}
    </h1>
  )
}

declare interface TitleProps {
  children: string
  black?: boolean
}
