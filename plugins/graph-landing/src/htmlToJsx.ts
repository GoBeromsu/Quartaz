import { toJsxRuntime, type Jsx } from "hast-util-to-jsx-runtime"
import type { Node, Root } from "hast"
import { Fragment, jsx, jsxs } from "preact/jsx-runtime"

export function htmlToJsx(tree: Node): ReturnType<typeof toJsxRuntime> {
  return toJsxRuntime(tree as Root, {
    Fragment,
    jsx: jsx as Jsx,
    jsxs: jsxs as Jsx,
    elementAttributeNameCase: "html",
  })
}
