import { NotFoundThemeHack } from "@/app/not-found-them-hack"
import { PageLayout } from "@/components/page-layout"

export default function NotFound() {
  return (
    <PageLayout>
      <NotFoundThemeHack />
      <div className="flex justify-center p-16">
        <h1>404 - page not found</h1>
        <p>...</p>
      </div>
    </PageLayout>
  )
}
