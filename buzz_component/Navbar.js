import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useBuzz } from "../Connector/buzz";
import { CiLogin } from "react-icons/ci";
import { NavbarUtil } from "../utils/NavbarUtil";
import { useRouter } from "next/router";
import Image from 'next/image'
const Navbar = () => {
  const router = useRouter();
  console.log(router.asPath);
  const { initialized } = useBuzz();
  const WalletMultiButtonDynamic = dynamic(
    async () =>
      (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
    { ssr: false }
  );
  const { word, home } = NavbarUtil();

  return (
    <>
      <header class="text-gray-600 body-font ">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <a href="/"><Image src="/logo.png" alt="image" width={80} height={80} className="rounded-xl items-start"/> </a>      
          </a>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-white text-xl"></a>
               
          </nav>
          
          <WalletMultiButtonDynamic
            style={{
              marginRight: "10px",
              borderRadius: "50vw",
            }}
          />
          {/* <button class="bg-white text-black py-2 px-4 rounded-3xl inline-flex items-center">
            <span>{word}</span>
            {initialized ? (
              <>
                {home ? (
                  <>
                    <BsArrowLeft onClick={()=> router.push("/")}  className="ml-1 w-5 text-3xl" />
                  </>
                ) : (
                  <>
                    <BsArrowRight onClick={()=> router.push("/main")}  className="ml-1 w-5 text-3xl" />
                  </>
                )}
              </>
            ) : (
              <CiLogin  className="ml-1 w-5 text-3xl" />
            )}
          </button> */}
        </div>
      </header>
    </>
  );
};

export default Navbar;
