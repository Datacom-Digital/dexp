import { useState, useEffect } from "react"

export const useLoaded = () => {
  const [onLoad, setOnLoad] = useState(false)
  useEffect(() => {
    setOnLoad(true)
  }, [])
  return onLoad
}
