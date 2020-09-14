import { generateKeywords } from "../helpers/generateKeywords"

export const config = () => {
  return {
    description: "",
    keywords: generateKeywords(),
  }
}
