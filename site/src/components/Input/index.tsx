import React from "react"

export const Input = (props: InputProps) => {
  const { id, type, max, onChange, onBlur, value, placeholder, message } = props

  if (type === "textarea")
    return (
      <div className="flex flex-col flex-grow justify-center">
        <label className="sr-only" htmlFor={id}>
          {placeholder}
        </label>
        <textarea
          value={value}
          id={id}
          maxLength={2000}
          className="border border-gray-500 px-3 py-2 mx-2 my-3"
          placeholder="Your message"
          rows={5}
          onChange={e => onChange(e)}
          onBlur={e => onBlur(e)}
        />
        <p className="text-white ml-3 h-6">{message || ""}</p>
      </div>
    )

  return (
    <div className="flex flex-col flex-grow justify-center">
      <label className="sr-only" htmlFor={id}>
        {placeholder}
      </label>
      <input
        value={value}
        id={id}
        type={type}
        max={max}
        className="h-10 border border-gray-500 px-3 py-2 mx-2 my-3 "
        placeholder={placeholder}
        onChange={e => onChange(e)}
        onBlur={e => onBlur(e)}
      />
      <p className="text-white ml-3 h-6">{message || ""}</p>
    </div>
  )
}

Input.defaultProps = {
  max: 225,
  type: "text",
  id: "input",
  placeholder: "placeholder",
  onChange: () => {},
}

declare interface InputProps {
  id: string
  placeholder: string
  max: number
  type: string | "textarea"
  onChange: CallableFunction
  onBlur: CallableFunction
  message?: string
  value: string
}
