const lookup = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
}

export const romanize = (arabic: string) => {
  let num = Number(arabic)
  let str = ""
  let i: keyof typeof lookup

  if (isNaN(num)) {
    return ""
  }

  for (i in lookup) {
    const q = Math.floor(num / lookup[i])
    num -= q * lookup[i]
    str += i.repeat(q)
  }

  return str
}
