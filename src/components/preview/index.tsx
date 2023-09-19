import React from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function MarkdownPreview(
  {markdownValue}: {markdownValue: string | undefined}
) {
  return (
    <ReactMarkdown
      children={markdownValue? markdownValue: ''}
      remarkPlugins={[remarkGfm]}
    />
  );
}

export default MarkdownPreview;
