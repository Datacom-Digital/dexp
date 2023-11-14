import Link from "next/link"
import { Slide } from "@/components/slideshow/slide"
import { SlideContainer } from "@/components/slideshow/slide-container"
import { HideNav } from "@/components/nav/hide-nav"
import { Prose } from "@/components/ui/prose"

export default function Page() {
  return (
    <SlideContainer>
      <HideNav />

      <Slide className="flex flex-col items-center pt-nav lg:pt-32">
        <Prose className="grid w-full max-w-2xl lg:prose-2xl">
          <h2 className="place-self-start">Dexp MVP</h2>
          <h2 className="place-self-end">Dexp CMS</h2>

          <p className="place-self-start">Fast Prototyping Starter Kit</p>
          <p className="place-self-end">Content editor framework</p>
          <p className="place-self-center">
            A new approach to developing websites
          </p>
        </Prose>
      </Slide>

      <Slide className="flex flex-col items-center pt-nav lg:pt-32">
        <Prose className="h-full w-full lg:prose-2xl">
          <h2>Quick start</h2>
          <p>15 minutes to deploy a new site including</p>
          <ul>
            <li>CDN cached website</li>
            <li>CMS editable content</li>
            <li>Asset storage bucket</li>
            <li>Email sending proxy</li>
            <li>Globally distributed sql database</li>
            <li>Authentication and user management</li>
          </ul>
        </Prose>
      </Slide>

      <Slide className="flex flex-col items-center pt-nav lg:pt-32">
        <Prose className="h-full w-full lg:prose-2xl">
          <h2>Rapid development with confidence</h2>
          <ul>
            <li>Every change has a deployed preview</li>
            <ul>
              Configured and automated
              <li>Linting</li>
              <li>Unit testing</li>
              <li>Component testing</li>
              <li>Integration testing</li>
            </ul>
            <li>Code review and deployment protection</li>
          </ul>
        </Prose>
      </Slide>

      <Slide className="flex flex-col items-center pt-nav lg:pt-32">
        <Prose className="h-full w-full max-w-3xl lg:prose-2xl">
          <h2>Extensible and maintainable</h2>
          <div className="float-left">
            <h4>React components</h4>
            <h4>Open source</h4>
            <h4>Typescript</h4>
            <h4>Nextjs</h4>
          </div>

          <div className="float-right">
            <h4>Data sources</h4>
            <ul>
              <li>Database</li>
              <li>Public api</li>
              <li>Secure api</li>
              <li>Any headless cms</li>
            </ul>
          </div>
        </Prose>
      </Slide>
      <Slide className="flex flex-col items-center pt-nav lg:pt-32">
        <Prose className="grid w-full max-w-2xl lg:prose-2xl">
          <h2 className="mx-auto">Dexp CMS</h2>
          <div>Use as is</div>
          <div className="place-self-center">
            as an interface to a headless cms
          </div>
          <div className="place-self-end">or not at all</div>
          <p>
            Built using{" "}
            <Link href="https://puck-editor-demo.vercel.app/">Puck</Link>
          </p>
          <p>Open source content editor</p>
          <p>Exciting development opportunity</p>
        </Prose>
      </Slide>
      <Slide className="flex flex-col items-center pt-nav lg:pt-32">
        <Prose className="grid w-full lg:prose-2xl">
          <h2 className="mx-auto">Outsourced Infrastructure</h2>
          <ul className="mx-auto">
            <li>
              Hosting <Link href="https://vercel.com/">Vercel</Link>
            </li>
            <li>
              Sourcecode <Link href="https://github.com/">Github</Link>
            </li>
            <li>
              Database <Link href="https://turso.tech/">Turso</Link>
            </li>
            <li>
              Email <Link href="https://resend.com/">Resend</Link>
            </li>
            <li>
              Storage <Link href="https://uploadthing.com/">Uploadthing*</Link>
            </li>
          </ul>
          <p className="mx-auto">
            The free plan on each of the above is currently running dexp.nz*
          </p>
        </Prose>
      </Slide>
      <Slide className="flex flex-col items-center pt-nav lg:pt-32">
        <Prose className="grid w-full lg:prose-2xl">
          <h2 className="mx-auto">Next steps</h2>
          <ul>
            <li>Enterprise accounts on the platforms?</li>
            <li>Is there demand for this?</li>
            <li>How to package?</li>
            <li>Invest in our own CMS?</li>
            <li>Is this a product, a platform or a service?</li>
          </ul>
        </Prose>
      </Slide>
    </SlideContainer>
  )
}
