"use client"

import dynamic from "next/dynamic"

const DCDashboard = dynamic(
  () =>
    import("@datacom-digital/ui-sample-components/dashboard").then(
      (mod) => mod.Dashboard,
    ),
  {
    ssr: false,
  },
)

export const Dashboard = () => {
  return <DCDashboard />
}
