import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import '@uiw/react-markdown-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import { NodeHtmlMarkdown } from "node-html-markdown";

const MarkdownEditor = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false }
);

function Editor(
  {markdownValue}: {markdownValue: string|undefined|null}
) {
  const [value, setValue] = useState<string|undefined>("**Hello world!!!**");
  useEffect(()=>{
    if(markdownValue){
      setValue(NodeHtmlMarkdown.translate(markdownValue))
    }
  },[markdownValue])

  return (
    <MarkdownEditor
      value={value} 
      height={'100vh'}
      onChange={(e) => { 
        setValue(e)
      }} />
  );
}

export default Editor;
