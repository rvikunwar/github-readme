"use client";
import MarkdownEditor from "@/components/markdown-editor";
import Profile from "@/components/profiles";
import { profiles } from "@/constants";
import { Poppins } from "next/font/google";
import React, { useState } from "react";

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"]
})
function Template() {
  const [markdownValue, setMarkdownValue] = useState<string | null>();
  return (
    <div className="flex min-h-screen">
      <div className="w-1/4 px-8 py-4">
        {profiles.map((item, index) => (
          <Profile
            key={index}
            name={item.name}
            category={item.category}
            onClick={() => {
              setMarkdownValue(item.markdown);
            }}
          />
        ))}
      </div>
      <div className="w-3/4 h-92 bg-white" style={poppins.style}>
        <MarkdownEditor 
          markdownValue={markdownValue}/>
      </div>
    </div>
  );
}

export default Template;
