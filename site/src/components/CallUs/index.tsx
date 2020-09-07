import React from "react"

export const CallUs = (props: CallUsProps) => {
  const { phone } = props

  return (
    <div className="flex flex-col items-center justify-center max-w-3xl py-5">
      <p className="text-white uppercase font-light p-3">call us at</p>
      <hr className="border border-white w-1/2" />
      <a
        href={`tel:${phone}`}
        className="text-white text-3xl md:text-4xl p-3 hover:text-black"
      >
        {phone}
      </a>
      <hr className="border border-white w-1/2" />
      <p className="text-white uppercase font-light p-3">
        pre book your taxi now
      </p>
    </div>
  )
}

declare interface CallUsProps {
  phone: string
}
