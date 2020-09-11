import React from "react"
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa"

export const Scroll = (props: ScrollProps) => {
  const { leftClickFn, rightClickFn } = props

  return (
    <div className="hidden lg:inline-flex w-full justify-evenly text-white">
      <FaChevronCircleLeft
        onClick={leftClickFn}
        className="text-4xl m-10 opacity-50 hover:opacity-100 hover:cursor-pointer"
      />
      <FaChevronCircleRight
        onClick={rightClickFn}
        className="text-4xl m-10 opacity-50 hover:opacity-100 hover:cursor-pointer"
      />
    </div>
  )
}

declare interface ScrollProps {
  leftClickFn: () => void
  rightClickFn: () => void
}
