"use client";
import React, { useEffect, useState, useCallback } from "react";
// import MarkdownEditor from "@/components/markdown-editor";
import Navbar from "@/components/navbar";
import Profile from "@/components/profiles";
import getAllDocument from "@/firebase/firestore";
import MarkdownEditor from "@/components/editor";
import MarkdownPreview from "@/components/preview";
import Fullscreen from "@/components/icons/Fullscreen";
import ExitScreen from "@/components/icons/ExitScreen";
import { NodeHtmlMarkdown } from "node-html-markdown";

interface Content {
  markdown: string;
  github: string;
  username: string;
  category: string;
}

function Template() {
  const [markdownValue, setMarkdownValue] = useState<string | undefined>();
  const [selected, setselected] = useState<string | null>();
  const [content, setContent] = useState<Content[]>();

  const fetchMarkdownContent = useCallback(async () => {
    try {
      const collectionName =
        process.env.NEXT_PUBLIC_FIRESTORE_README_COLLECTION;
      console.log(collectionName);
      if (!collectionName) return;
      const result = await getAllDocument(collectionName);
      console.log(result, "result");
      setContent(result);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchMarkdownContent();
  }, [fetchMarkdownContent]);

  const [previewValue, setPreviewValue] = useState("Hello");

  const [ fullScreen, setFullScreen] = useState(false);
  const fullScreenHandler = () => {
    setFullScreen(e => !e);
  }

  const contentHandler = (item: Content) => {
    const translatedMarkdown = NodeHtmlMarkdown.translate(item.markdown);
    setMarkdownValue(translatedMarkdown);
    setselected(item.username);
  }

  return (
    <div className="w-full">
      <Navbar />
      <div className="flex py-6 px-2 w-full" style={{ height: "90vh" }}>
        <div
          className="w-1/4 px-6 py-4 overflow-x-auto
            overflow-scroll profile-section border rounded-lg dark:border-none"
        >
          {content?.map((item, index) => (
            <Profile
              key={index}
              name={item.username}
              selected={selected}
              category={item.category}
              onClick={() => {contentHandler(item)}}
            />
          ))}
        </div>
        <div className="w-3/4 px-4 flex">
          { !fullScreen && <div className="w-1/2 h-full">
            <MarkdownEditor
              markdownValue={markdownValue}
              setMarkdownValue={setMarkdownValue}
            />
          </div> }
          <div
            className={`${fullScreen? 'w-full': 'w-1/2'} mx-4 h-full preview border border-gray-500 rounded-md p-6 preview
             bg-white dark:bg-black
              overflow-x-scroll md:overflow-x-auto relative`}>
            <span className="absolute right-4 top-2 cursor-pointer"
              onClick={fullScreenHandler}>
              { !fullScreen ? <Fullscreen />: <ExitScreen/>}
            </span>
            <MarkdownPreview markdownValue={markdownValue} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template;
