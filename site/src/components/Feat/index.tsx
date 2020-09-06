import React from "react"
import { IconType } from "react-icons/lib"

export const Feat = (prop: FeatProp) => {
  const { children, content, title } = prop

  return (
    <div className="flex flex-col justify-center items-center text-white p-5 my-5">
      <div className="p-4 w-20 text-5xl border border-dashed rounded-full">
        {children}
      </div>
      <h2 className="p-3 text-xl text-center">{title}</h2>
      <hr className="border-2 w-10 rounded" />
      <p className="text-center p-3 text-sm font-light">{content}</p>
    </div>
  )
}

declare interface FeatProp {
  children: React.ReactNode
  title: string
  content: string
}
