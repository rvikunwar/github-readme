import React, { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";

function MarkdownEditor(
  {markdownValue}: {markdownValue: string|undefined|null}
) {
  const [value, setValue] = useState<string|undefined>("**Hello world!!!**");
  useEffect(()=>{
    if(markdownValue){
      setValue(markdownValue)
    }
  },[markdownValue])

  return (
    <MDEditor 
      value={value} 
      height={'100%'}
      onChange={(e) => { 
        setValue(e)
      }} />
  );
}

export default MarkdownEditor;
