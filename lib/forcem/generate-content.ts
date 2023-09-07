import forcemIpsum from "forcem-ipsum"

export const generateContent = (option: any, limit?: any): any =>
  forcemIpsum(option, limit).map((text, id) => ({
    id: id.toString(),
    text,
  }))
