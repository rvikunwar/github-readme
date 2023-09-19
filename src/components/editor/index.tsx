"use client";
import React, { Dispatch } from "react";
import Editor from "@monaco-editor/react";

function MarkdownEditor({
  markdownValue,
  setMarkdownValue
  
}: {
  markdownValue: string | undefined;
  setMarkdownValue: Dispatch<string| undefined>
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
      defaultLanguage="markdown"
      value={markdownValue}
      theme="vs-dark"
      className="w-full rounded-sm border border-gray-500"
      onChange={(e) => {
        setMarkdownValue(e);
      }}
      options={options}
    />
  );
}

export default MarkdownEditor;
