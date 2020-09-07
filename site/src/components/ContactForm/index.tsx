import { FormikHelpers, useFormik } from "formik"
import React from "react"
import { FaRegPaperPlane } from "react-icons/fa"
import { Input } from ".."
import { validate } from "../../helpers/validate"
import { formService } from "../../service/formService"

export const ContactForm = () => {
  const {
    handleSubmit,
    errors,
    touched,
    handleBlur,
    handleChange,
    values,
    isSubmitting,
  } = useFormik<ContactFormData>({
    initialValues: { email: "", name: "", message: "", phone: "" },
    validate,
    onSubmit: async (
      values,
      { setSubmitting }: FormikHelpers<ContactFormData>
    ) => {
      const response = await formService(values)
      setSubmitting(false)
      if (response === "success") {
        // show alert
      }

      if (response === "error") {
        // show alert
      }
    },
  })

  return (
    <form
      className="max-w-3xl my-10 w-full flex flex-wrap justify-between"
      onSubmit={e => {
        handleSubmit(e)
      }}
    >
      <Input
        value={values.name}
        id="name"
        max={225}
        placeholder="Your name"
        type="text"
        message={errors.name && touched.name ? errors.name : ""}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Input
        value={values.phone}
        id="phone"
        max={225}
        placeholder="Your phone number"
        type="tel"
        message={errors.phone && touched.phone ? errors.phone : ""}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Input
        value={values.email}
        id="email"
        max={225}
        placeholder="Your email"
        type="email"
        message={errors.email && touched.email ? errors.email : ""}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Input
        value={values.message}
        id="message"
        placeholder="Your message"
        type="textarea"
        message={errors.message && touched.message ? errors.message : ""}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <div className="w-full mt-3">
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-wineDark text-white flex justify-center items-center mx-auto p-3 rounded-lg"
        >
          <FaRegPaperPlane className="mx-2" /> Send message
        </button>
      </div>
    </form>
  )
}

declare interface ContactFormData {
  email: string
  name: string
  phone: string
  message: string
}
