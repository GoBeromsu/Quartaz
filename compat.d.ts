declare module "micromorph" {
  function micromorph(
    oldNode: Node,
    newNode: Node,
    options?: {
      callbacks?: {
        beforeNodeMorphed?: (oldNode: Node, newNode: Node) => boolean | void
        afterNodeMorphed?: (oldNode: Node, newNode: Node) => void
      }
    },
  ): void
  export default micromorph
}

declare module "remark-parse/lib" {
  export type Root = import("mdast").Root
}
