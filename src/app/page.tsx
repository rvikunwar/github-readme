"use client";
import Footer from "@/components/footer";
import Github from "@/components/icons/Github";
import Readme from "@/components/icons/Readme";
import { Poppins, Titan_One } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";


const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
});

const titanOne = Titan_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();
  const navigateToTemplate = () => {
    router.push("/template");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex p-24">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center 
          bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <span
            className={`pointer-events-none flex place-items-center gap-2 p-8 
            lg:pointer-events-auto lg:p-0 ${poppins.className} cursor-pointer`}
          >
            <Readme dark={true} /> Readme
          </span>
        </div>
        <p
          className={`fixed left-0 top-0 flex w-full justify-center 
          border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 
          pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 
          dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border 
          lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 ${poppins.className} `}
        >
          Get started by editing&nbsp;
          <code className={`font-bold ${poppins.className}`}>
            src/app/page.tsx
          </code>
        </p>
      </div>

      <div className="relative flex flex-col items-center justify-center px-24 mb-20">
        <h3 className={`${titanOne.className} text-6xl`}>Readme templates</h3>
        <p className={`text-center mt-4 md:px-52 ${poppins.className}`}>
          Your gateway to effortlessly explore GitHub profiles and their
          associated README files. Easily search, preview, and bookmark
          profiles, saving you time and providing valuable insights into
          projects and developers. Discover, connect, and stay informed with
          GitHub README Explorer!
        </p>
        <div className={`mt-4 flex ${poppins.className}`}>
          <button
            onClick={navigateToTemplate}
            className="text-sm rounded-md px-6 cursor-pointer 
              mx-2 py-1 text-white bg-[#07C5CE] hover:scale-105 transition-all duration-500"
          >
            Get started
          </button>
          <button className="main-btn text-sm rounded-md px-6 cursor-pointer mx-2 flex 
            items-center hover:scale-105 transition-all duration-500">
            <Github /> <span>Github</span>
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col relative footer-background mt-16">
        <Image
          src="/sc1.webp"
          alt="Readme"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-md"
          style={{
            width: "90%",
            height: "auto",
            position: "absolute",
            right: "5%",
            left: "5%",
            top: 0,
            bottom: 0,
          }}
        />
        <div className="footer-50 w-full"></div>
      </div>
      <Footer />
    </main>
  );
}
