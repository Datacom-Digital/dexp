import {
  DefaultRootProps,
  DefaultComponentProps as PuckDefaultComponentProps,
  Field,
  Data,
} from "@measured/puck"
import {
  ComponentProps,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
} from "react"
import { components } from "@/lib/puck/components"

export type RenderContext = {
  data: Data
  areaId?: string
}

type DefaultComponentProps = PuckDefaultComponentProps & {
  renderctx?: RenderContext
}

export type PuckComponent<
  Props extends DefaultComponentProps = DefaultComponentProps,
> = JSXElementConstructor<Props & DefaultComponentProps>

export type PuckFields<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component extends PuckComponent<any>,
  Props extends ComponentProps<Component> = ComponentProps<Component>,
> = {
  fields: {
    [PropName in keyof Omit<
      Required<Props>,
      "children" | "editMode" | "renderctx"
    >]: Field<Props[PropName][0]>
  }
  defaultProps: Props
}

type ComponentConfig<
  Props extends DefaultComponentProps = DefaultComponentProps,
  DefaultProps = Props,
> = {
  render: (props: Props & { id?: string }) => ReactElement
  defaultProps?: DefaultProps
  fields?: PuckFields<ComponentConfig["render"]>
}

type PuckComponents = typeof components

export type PuckConfig<RootProps extends DefaultRootProps = DefaultRootProps> =
  {
    components: {
      [ComponentName in keyof PuckComponents]: PuckFields<
        PuckComponents[ComponentName]
      > & {
        render: PuckComponents[ComponentName]
      }
    }
    root?: ComponentConfig<
      RootProps & {
        children: ReactNode
      },
      Partial<
        RootProps & {
          children: ReactNode
        }
      >
    >
  }
