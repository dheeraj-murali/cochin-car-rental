import { useState, useEffect } from "react"

export const useWindowResize = (containerHeight: number) => {
  const [height, setHeight] = useState<number>()

  useEffect(() => {
    function handleResize() {
      setHeight(containerHeight)
    }

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return height
}
