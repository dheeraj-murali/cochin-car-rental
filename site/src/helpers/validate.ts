export const validate = (values: ContactFormData) => {
  const errors = {
    email: "",
    name: "",
    message: "",
    phone: "",
  }

  if (!values.email) {
    errors.email = "Email is Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }

  if (!values.name) {
    errors.name = "Name is Required"
  } else if (!(values.name.trim().length > 2)) {
    errors.name = "Requires at least 3 characters"
  }

  if (!values.phone) {
    errors.phone = "Phone number is Required"
  } else if (!/^([+]\d{2})?\s?[0]?[0-9]{10}$/gm.test(values.phone)) {
    errors.phone = "Invalid phone number"
  }

  if (!values.message) {
    errors.message = "Message is Required"
  } else if (!(values.message.trim().length > 2)) {
    errors.message = "Requires at least 3 characters"
  }

  if (errors.email === "" && errors.message === "" && errors.name === "")
    return {}

  return errors
}

declare interface ContactFormData {
  email: string
  name: string
  phone: string
  message: string
}
