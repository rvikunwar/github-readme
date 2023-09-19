import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

function MarkdownPreview({
  markdownValue,
}: {
  markdownValue: string | undefined;
}) {
  return (
    <ReactMarkdown
      className="min-h-screen"
      rehypePlugins={[rehypeRaw as any]}
      remarkPlugins={[remarkGfm]}
    >
      {markdownValue ? markdownValue : ""}
    </ReactMarkdown>
  );
}

export default MarkdownPreview;
