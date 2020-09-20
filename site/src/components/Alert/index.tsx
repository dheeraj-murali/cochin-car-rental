import React, { useContext, useEffect } from "react"
import { FaInfoCircle, FaWindowClose } from "react-icons/fa"
import { AppContext } from "../../context"

export const Alert = () => {
  const {
    dispatch,
    state: { alert },
  } = useContext(AppContext)

  useEffect(() => {
    if (alert.isVisible)
      setTimeout(() => {
        dispatch({ type: "DISMISS_ALERT" })
      }, 3000)
  }, [alert.isVisible, dispatch])

  const getColor = () => {
    if (alert.type === "error")
      return `border-orange-500 text-orange-900 bg-orange-100`
    if (alert.type === "warning")
      return `border-yellow-500 text-yellow-900 bg-yellow-100`
    if (alert.type === "success")
      return `border-teal-500 text-teal-900 bg-teal-100`
  }

  if (alert.isVisible)
    return (
      <div
        className={`${getColor()} fixed bottom-0  border-t-4 rounded-b  px-4 py-3 shadow-md z-50 w-full`}
        role="alert"
      >
        <div className="flex">
          <div className="py-1">
            <FaInfoCircle className="fill-current h-6 w-6 mr-4" />
          </div>
          <div className="flex-grow mr-10">
            <p className="font-bold">{alert.title}</p>
            <p className="text-sm">{alert.message}</p>
          </div>
          <div className="py-1">
            <FaWindowClose
              className="cursor-pointer fill-current h-6 w-6 text-red-400 hover:text-red-700"
              onClick={() => dispatch({ type: "DISMISS_ALERT" })}
            />
          </div>
        </div>
      </div>
    )

  return null
}
