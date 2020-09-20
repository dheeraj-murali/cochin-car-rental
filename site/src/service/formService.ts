import { encode } from "../helpers/encode"

export const formService = async (payload: ContactFormData) => {
  try {
    const response = await fetch(
      "https://script.google.com/a/seriestours.com/macros/s/AKfycbwbRZ5fRl6V8UCy35ScxIWYaeWYquqgf9Z6r-nH/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encode({ "form-name": "contact", ...payload }),
      }
    )

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
