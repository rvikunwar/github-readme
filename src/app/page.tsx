"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Profile from "@/components/profiles";
import MarkdownEditor from "@/components/editor";
import MarkdownPreview from "@/components/preview";
import Fullscreen from "@/components/icons/Fullscreen";
import ExitScreen from "@/components/icons/ExitScreen";
import useDeviceDetect, { useLocalStorage } from "@/hooks";
import Footer from "@/components/footer";
import { projectDescription, yourSpace, yourSpaceKey } from "@/constant";
import { profileReadme } from "@/constant/readme";
import Loader from "@/components/loader";

interface Content {
  markdown: string;
  github?: string;
  username: string;
  description: string;
  category: string;
}

function Template() {
  const [markdownValue, setMarkdownValue] =
    useState<string>(projectDescription);
  const [selected, setselected] = useState<string | null>();
  const [content, setContent] = useState<Content[]>();
  const [showDrawer, toggleDrawer] = useState(false);
  const [inputValue, setInputValue] = useLocalStorage<string>(yourSpaceKey);
  const [loader,setLoader] =  useState(true)

  const [fullScreen, setFullScreen] = useState(false);
  const fullScreenHandler = () => {
    setFullScreen((e) => !e);
  };

  const contentHandler = (item: Content) => {
    setselected(item.username);
    if (item.username === yourSpace.username) {
      setMarkdownValue(inputValue);
    } else {
      setMarkdownValue(item.markdown);
    }
  };

  const drawerClass = showDrawer ? "" : "-translate-x-full sm:transform-none";
  const { isMobile } = useDeviceDetect();

  useEffect(() => {
    const markdownStoredData = inputValue;
    const yourContent = {
      ...yourSpace,
      markdown: !markdownStoredData || markdownStoredData === "" ? 
        projectDescription: markdownStoredData,
    };
    setContent([yourContent, ...profileReadme]);
    setselected(yourSpace.username);
    setMarkdownValue(yourContent.markdown);
  }, [inputValue]);

  useEffect(() => {
    if (selected === yourSpace.username && markdownValue) {
      setInputValue(markdownValue);
    }
  }, [markdownValue, selected, setInputValue]);

  const onLoaderClose = () => {
    setLoader(false)
  }
  return (
    <div className="w-full">
      {loader && <Loader onClickHandler={onLoaderClose}/> }
      <Navbar
        isDrawerOpen={showDrawer}
        onMenuClick={() => {
          toggleDrawer(!showDrawer);
        }}
      />
      <div
        className="flex py-6 px-0 sm:px-2 w-full"
        style={{ minHeight: "90vh" }}
      >
        <div
          className={`flex flex-col h-screen-85 absolute overflow-y-scroll w-3/4 sm:w-1/4 lg:w-1/5 border-none 
            sm:border sm:rounded-lg dark:border-none shadow sm:shadow-none'} sm:relative 
            p-2 bg-white dark:bg-black md:bg-transparent z-10 md:z-0
            transform transition-transform duration-500 ease-in-out ${drawerClass}`}
        >
          {content?.map((item, index) => (
            <Profile
              key={index}
              name={item.username}
              description={item.description}
              selected={selected}
              category={item.category}
              github={item.github}
              onClick={() => {
                contentHandler(item);
              }}
            />
          ))}
        </div>
        <div className="w-full sm:w-3/4 lg:w-4/5 px-4 flex flex-col md:flex-row ">
          {!fullScreen && (
            <div className="w-full sm:w-1/2 h-screen-85 order-2 sm:order-1">
              <MarkdownEditor
                markdownValue={markdownValue}
                setMarkdownValue={setMarkdownValue}
              />
            </div>
          )}
          <div
            className={`${
              fullScreen
                ? "w-full mt-4 sm:mt-0 px-2"
                : "w-full sm:w-1/2 p-2 sm:p-6 sm:mx-4"
            } h-screen-85 preview border border-gray-500 rounded-md preview
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
