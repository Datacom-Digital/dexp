import { useCallback, useEffect, useState } from "react"
import { Data } from "@measured/puck"
import { clientConfig } from "@/lib/puck.config"

export const useLocalData = (path: string) => {
  // unique b64 key that updates each time we add / remove components
  const componentKey = Buffer.from(
    Object.keys(clientConfig.components).join("-"),
  ).toString("base64")

  const key = `puck-demo:${componentKey}:${path}`

  const [data, setData] = useState<Data>()

  useEffect(() => {
    const dataStr = localStorage.getItem(key)

    if (dataStr) {
      setData(JSON.parse(dataStr))
    }
  }, [key])

  const setLocalData = useCallback(
    (data: Data) => localStorage.setItem(key, JSON.stringify(data)),
    [key],
  )

  return [data, setLocalData] as const
}
