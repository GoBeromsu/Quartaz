import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "../../quartz/components/types"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const BlogFooter: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? {}

    return (
      <footer class={displayClass ?? ""}>
        <p>© {year} Beomsu Koh</p>
        <ul>
          {Object.entries(links).map(([label, href]) => (
            <li>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  BlogFooter.css = `
footer {
  margin-bottom: 4rem;
  opacity: 0.7;
  text-align: left;
}

footer ul {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  list-style: none;
  margin: 0;
  margin-top: -1rem;
  padding: 0;
}
`

  return BlogFooter
}) satisfies QuartzComponentConstructor<Options | undefined>
