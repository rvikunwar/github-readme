"use client";
import React, { Dispatch } from "react";
import Editor from "@monaco-editor/react";


function MarkdownEditor({
  markdownValue,
  setMarkdownValue,
}: {
  markdownValue: string | undefined;
  setMarkdownValue: Dispatch<string>;
}) {
  const options = {
    minimap: {
      enabled: false,
    },
    wordWrap: "on" as const,
    lineNumbers: "off" as const
  };

  return (
    <Editor
      language="markdown"
      value={markdownValue}
      theme="vs-dark"
      className="w-full rounded-sm border border-gray-500"
      onChange={(e) => {
        if(e) setMarkdownValue(e) 
        else setMarkdownValue("") ;
      }}
      options={options}
    />
  );
}

export default MarkdownEditor;
