import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import remarkSlug from 'remark-slug'
import remarkToc from 'remark-toc'

function MarkdownPreview({
  markdownValue,
}: {
  markdownValue: string | undefined;
}) {

  /** @type {import('unified').PluggableList} */
  const rehypePlugins = [rehypeHighlight, {ignoreMissing: true}, rehypeRaw as any]
  /** @type {import('unified').PluggableList} */
  const remarkPlugins = [remarkSlug, remarkToc, remarkGfm]

  return (
    <ReactMarkdown
      rehypePlugins={rehypePlugins}
      remarkPlugins={remarkPlugins}
      >
      {markdownValue ? markdownValue: ""}
    </ReactMarkdown>
  );
}

export default MarkdownPreview;
