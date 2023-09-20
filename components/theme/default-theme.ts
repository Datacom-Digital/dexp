export const defaultTheme = [
  { id: "background", light: "60 9% 98%", dark: "24 10% 10%" },
  { id: "foreground", light: "24 10% 10%", dark: "60 9% 98%" },

  { id: "card", light: "60 9% 98%", dark: "24 10% 10%" },
  { id: "card-foreground", light: "24 10% 10%", dark: "60 9% 98%" },

  { id: "popover", light: "60 9% 98%", dark: "24 10% 10%" },
  { id: "popover-foreground", light: "24 10% 10%", dark: "60 9% 98%" },

  { id: "primary", light: "229 100% 18%" },
  { id: "primary-foreground", light: "60 9% 98%" },

  { id: "secondary", light: "60 4.8% 95.9%", dark: "12 6.5% 15.1%" },
  { id: "secondary-foreground", light: "24 9.8% 10%", dark: "60 9% 98%" },

  { id: "muted", light: "60 4.8% 95.9%", dark: "12 6.5% 15.1%" },
  { id: "muted-foreground", light: "25 5.3% 44.7%", dark: "24 5.4% 63.9%" },

  { id: "accent", light: "60 4.8% 95.9%", dark: "12 6.5% 15.1%" },
  { id: "accent-foreground", light: "24 9.8% 10%", dark: "60 9% 98%" },

  { id: "destructive", light: "0 84.2% 60.2%", dark: "0 62.8% 30.6%" },
  { id: "destructive-foreground", light: "60 9% 98%" },

  { id: "border", light: "20 5.9% 90%", dark: "12 6.5% 15.1%" },
  { id: "input", light: "229 100% 18%" },
  { id: "ring", light: "221 47% 37%" },
]

export type Theme = typeof defaultTheme
