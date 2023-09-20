import forcemIpsum from "forcem-ipsum"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const generateContent = (option: any, limit?: any): any =>
  forcemIpsum(option, limit).map((text, id) => ({
    id: id.toString(),
    text,
  }))
