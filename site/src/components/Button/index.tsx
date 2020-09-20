import React from "react"
import { CgSpinner } from "react-icons/cg"
import { FaRegPaperPlane } from "react-icons/fa"

export const Button = (props: ButtonProps) => {
  const { isDisabled, loader } = props

  if (isDisabled)
    return (
      <button
        disabled={isDisabled}
        type="submit"
        className="inline-flex items-center h-12 bg-wineDark opacity-50 py-2 px-3 text-white font-medium rounded-lg shadow whitespace-no-wrap cursor-not-allowed"
      >
        <span className="pr-2">
          {loader ? (
            <CgSpinner className="animate-spin text-xl" />
          ) : (
            <FaRegPaperPlane className="mx-2" />
          )}
        </span>
        Sending mail
      </button>
    )

  return (
    <button
      disabled={isDisabled}
      type="submit"
      className="inline-flex items-center h-12 bg-wineDark hover:bg-red-800 py-2 px-3 text-white font-medium rounded-lg shadow whitespace-no-wrap"
    >
      <span className="pr-2">
        {loader ? (
          <CgSpinner className="animate-spin text-xl" />
        ) : (
          <FaRegPaperPlane className="mx-2" />
        )}
      </span>
      Send mail
    </button>
  )
}

declare interface ButtonProps {
  isDisabled?: boolean
  loader?: boolean
}
