"use client";
import React, { useEffect, useState, useCallback } from "react";
import Navbar from "@/components/navbar";
import Profile from "@/components/profiles";
import getAllDocument from "@/firebase/firestore";
import MarkdownEditor from "@/components/editor";
import MarkdownPreview from "@/components/preview";
import Fullscreen from "@/components/icons/Fullscreen";
import ExitScreen from "@/components/icons/ExitScreen";
import { NodeHtmlMarkdown } from "node-html-markdown";
import { Poppins } from "next/font/google";
import useDeviceDetect from "@/hooks";
import Footer from "@/components/footer";
import { projectDescription } from "@/constant";

interface Content {
  markdown: string;
  github: string;
  username: string;
  category: string;
}

function Template() {
  const [markdownValue, setMarkdownValue] = useState<string>(projectDescription);
  const [selected, setselected] = useState<string | null>();
  const [content, setContent] = useState<Content[]>();
  const [showDrawer, toggleDrawer] = useState(false);

  const fetchMarkdownContent = useCallback(async () => {
    try {
      const collectionName =
        process.env.NEXT_PUBLIC_FIRESTORE_README_COLLECTION;
      if (!collectionName) return;
      const result = await getAllDocument(collectionName);
      setContent(result);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchMarkdownContent();
  }, [fetchMarkdownContent]);

  const [fullScreen, setFullScreen] = useState(false);
  const fullScreenHandler = () => {
    setFullScreen((e) => !e);
  };

  const contentHandler = (item: Content) => {
    const translatedMarkdown = NodeHtmlMarkdown.translate(item.markdown);
    setMarkdownValue(translatedMarkdown);
    setselected(item.username);
  };

  const drawerClass = showDrawer ? "" : "-translate-x-full sm:transform-none";
  const { isMobile } = useDeviceDetect();

  return (
    <div className="w-full">
      <Navbar
        isDrawerOpen={showDrawer}
        onMenuClick={() => {
          toggleDrawer(!showDrawer);
        }}
      />
      <div className="flex py-6 px-0 sm:px-2 w-full" style={{ height: "90vh" }}>
        <div
          className={`flex flex-col h-full absolute w-3/4 sm:w-1/4 border-none sm:border sm:rounded-lg dark:border-none shadow sm:shadow-none'} sm:relative p-2 bg-white dark:bg-black md:bg-transparent z-10 md:z-0
            transform transition-transform duration-500 ease-in-out ${drawerClass}`}
        >
          {content?.map((item, index) => (
            <Profile
              key={index}
              name={item.username}
              selected={selected}
              category={item.category}
              onClick={() => {
                contentHandler(item);
              }}
            />
          ))}
        </div>
        <div className="w-full sm:w-3/4 px-4 flex flex-col md:flex-row ">
          {!fullScreen && (
            <div className="w-full sm:w-1/2 h-full order-2 sm:order-1">
              <MarkdownEditor
                markdownValue={markdownValue}
                setMarkdownValue={setMarkdownValue}
              />
            </div>
          )}
          <div
            className={`${
              fullScreen ? "w-full mt-4 sm:mt-0 px-2" : "w-full sm:w-1/2 p-2 sm:p-6 sm:mx-4"
            } h-full preview border border-gray-500 rounded-md preview
             bg-white dark:bg-black order-1 
              overflow-x-scroll md:overflow-x-auto relative mb-4`}
          >
            <span
              className="absolute h-full right-4 top-2 cursor-pointer"
              onClick={fullScreenHandler}
            >
              {!isMobile && (!fullScreen ? <Fullscreen /> : <ExitScreen />)}
            </span>
            <MarkdownPreview markdownValue={markdownValue} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Template;
