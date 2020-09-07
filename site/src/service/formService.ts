import { encode } from "../helpers/encode"

export const formService = async (payload: ContactFormData) => {
  try {
    const response = await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encode({ "form-name": "contact", ...payload }),
    })

    console.log({ response })
    return "success"
  } catch (error) {
    return "error"
  }
}

declare interface ContactFormData {
  email: string
  name: string
  phone: string
  message: string
}
