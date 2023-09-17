"use client";
import MarkdownEditor from "@/components/markdown-editor";
import Navbar from "@/components/navbar";
import Profile from "@/components/profiles";
import { profiles } from "@/constants";
import getAllDocument from "@/firebase/firestore";
import { Poppins } from "next/font/google";
import React, { useEffect, useState, useCallback } from "react";

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
});

interface Content {
  markdown: string;
  github: string;
  username: string;
  category: string;
}

function Template() {
  const [markdownValue, setMarkdownValue] = useState<string | null>();
  const [selected, setselected] = useState<string | null>();
  const [content, setContent] =  useState<Content[]>()

  const fetchMarkdownContent = useCallback(async ()=>{
    try {
      const collectionName = process.env.NEXT_PUBLIC_FIRESTORE_README_COLLECTION;
      console.log(collectionName)
      if(!collectionName) return;
      const result = await getAllDocument(collectionName);
      console.log(result, 'result')
      setContent(result)
    } catch(error){
      console.log(error)
    }
  },[])

  useEffect(()=>{
    console.log(11111111111111)
    fetchMarkdownContent()
  },[fetchMarkdownContent])

  return (
    <div className="w-full">
      <Navbar/>
      {" "}
      <div className="flex py-6 px-2" style={{ height: '90vh' }}>
        <div
          className="w-1/4 px-6 py-4 overflow-x-auto
            overflow-scroll profile-section border rounded-lg">
          {content?.map((item, index) => (
            <Profile
              key={index}
              name={item.username}
              selected={selected}
              category={item.category}
              onClick={() => {
                setMarkdownValue(item.markdown);
                setselected(item.username);
              }}
            />
          ))}
        </div>
        <div className="w-3/4 bg-white px-4">
          <MarkdownEditor markdownValue={markdownValue} />
        </div>
      </div>
    </div>
  );
}

export default Template;
