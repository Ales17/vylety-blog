import { JSXConverters } from '@payloadcms/richtext-lexical/react'
import { SerializedHeadingNode } from '@payloadcms/richtext-lexical'

export const headingConverter: JSXConverters<SerializedHeadingNode> = {
  heading: ({ node, nodesToJSX }) => {
    const text = nodesToJSX({ nodes: node.children })

    if (node.tag === 'h1') {
      return <h1>{text}</h1>
    } else if (node.tag === 'h2') {
      return <h2>{text}</h2>
    } else if (node.tag === 'h3') {
      return <h3>{text}</h3>
    }
  },
}
