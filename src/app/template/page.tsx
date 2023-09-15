"use client";
import MarkdownEditor from "@/components/markdown-editor";
import Navbar from "@/components/navbar";
import Profile from "@/components/profiles";
import { profiles } from "@/constants";
import { Poppins } from "next/font/google";
import React, { useState } from "react";

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
});

function Template() {
  const [markdownValue, setMarkdownValue] = useState<string | null>();
  const [selected, setselected] = useState<string | null>();

  return (
    <div className="w-full">
      <Navbar/>
      {" "}
      <div className="flex py-6 px-2" style={{ height: '90vh' }}>
        <div
          className="w-1/4 px-6 py-4 overflow-x-auto
            overflow-scroll profile-section border rounded-lg">
          {profiles.map((item, index) => (
            <Profile
              key={index}
              name={item.name}
              selected={selected}
              category={item.category}
              onClick={() => {
                setMarkdownValue(item.markdown);
                setselected(item.name);
              }}
            />
          ))}
        </div>
        <div className="w-3/4 bg-white px-4" style={{ ...poppins.style }}>
          <MarkdownEditor markdownValue={markdownValue} />
        </div>
      </div>
    </div>
  );
}

export default Template;
