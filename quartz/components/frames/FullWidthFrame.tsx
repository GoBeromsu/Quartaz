import { PageFrame, PageFrameProps } from "./types"
import HeaderConstructor from "../Header"

const Header = HeaderConstructor()

/**
 * Full-width page frame — the center content area spans the full width of
 * the page. Header, beforeBody, body, afterBody, and footer are all
 * rendered in a single column. Right components, when configured, render
 * in a floating aside so themes can position them (e.g. a sticky TOC).
 *
 * Useful for page types like Canvas, presentations, or dashboards that
 * need maximum horizontal space.
 */
export const FullWidthFrame: PageFrame = {
  name: "full-width",
  render({
    componentData,
    header,
    beforeBody,
    pageBody: Content,
    afterBody,
    right,
    footer,
  }: PageFrameProps) {
    return (
      <>
        <div class="center full-width">
          <div class="page-header">
            <Header {...componentData}>
              {header.map((HeaderComponent) => (
                <HeaderComponent {...componentData} />
              ))}
            </Header>
            <div class="popover-hint">
              {beforeBody.map((BodyComponent) => (
                <BodyComponent {...componentData} />
              ))}
            </div>
          </div>
          <Content {...componentData} />
          <hr />
          <div class="page-footer">
            {afterBody.map((BodyComponent) => (
              <BodyComponent {...componentData} />
            ))}
          </div>
        </div>
        {right.length > 0 && (
          <aside class="sidebar right">
            {right.map((RightComponent) => (
              <RightComponent {...componentData} />
            ))}
          </aside>
        )}
        {footer.map((FooterComponent) => (
          <FooterComponent {...componentData} />
        ))}
      </>
    )
  },
}
