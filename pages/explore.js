import { useState } from "react";
import { useBuzz } from "../Connector/buzz";
import { AiOutlinePlus } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { BsArrow90DegLeft } from "react-icons/bs";
import Header from "../buzz_component/InsideComponent/Header";
import {Oval} from "react-loader-spinner"
const upload = () => {
  const {
    addVideo,
    videoDiscription,
    videoUrl,
    videoDiscriptionHandler,
    videoUrlHandler,
    allvideo,
    loading,
    transactionPending,
    videoLoading,
  } = useBuzz();
  const [upload, setUpload] = useState(false);
  const uploadVideo = () => {
    addVideo();
    if (loading && transactionPending == false) {
      setUpload(false);
    }
  };

  const switchView = () => {
    if (upload == false) {
      setUpload(true);
    }
    if (upload == true) {
      setUpload(false);
    }
  };
  return (
    <>
    <div className="bg-[url('/bg.png')] rounded-t-2xl bg-cover ">
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />

      <div class="p-2 w-full flex flex-col justify-end items-end ">
        {upload ? (
          <>
            <button
              onClick={() => switchView()}
              class="text-white bg-purple-900 py-2 px-8 mt-5 mr-5 rounded-full inline-flex"
            >
              GO BACK
              <BsArrow90DegLeft className="pl-2"/>
          
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => switchView()}
              class="text-white bg-purple-900 py-2 px-8 mt-5 mr-5 rounded-full"
            >Upload Here
              <AiOutlinePlus className="ml-2 justify-center inline-flex items-center" />
              
            </button>

            {/* <h2 className="mt-2 mr-5">Upload</h2> */}
          </>
        )}
      </div>

      {upload ? (
        <>
          <section class="text-gray-600 body-font relative my-18" id="login">
            <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
              <div class="lg:w-2/3 md:w-1/2  bg-[url('/bg.png')] rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <div
                  style={{
                    zIndex: -1,
                    position: "fixed",
                    width: "100vw",
                    height: "100vh",
                  }}
                >
                 
                </div>
                <div
                  width="50%"
                  height="100%"
                  class="absolute inset-0 bg-gray-900"
                  frameborder="0"
                  title="map"
                  marginheight="0"
                  marginwidth="0"
                  scrolling="no"
                >
                  <h2 className="flex flex-col items-end mx-10  justify-end text-white text-8xl mt-10">
                    Share Media
                  </h2>
                  <h2 className="flex flex-col items-end mx-10 justify-end text-white text-6xl mt-5">
                    with the world
                  </h2>
                  {/* <h2 className="flex flex-col items-end mx-10 justify-end text-yellow-400 text-5xl mt-5">
                    Upload Your Videos
                  </h2> */}
                </div>
              </div>
              <div class="lg:w-2/6 md:w-1/2 bg-black rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10  md:mt-0 justify-center">
                <h2 class="text-white text-lg font-medium title-font mb-5">
                  Upload
                </h2>
                <div class="relative mb-4">
                  <label for="email" class="leading-7 text-sm text-white">
                    Video Description
                  </label>
                  <input
                    value={videoDiscription}
                    onChange={videoDiscriptionHandler}
                    type="text"
                    class="w-full mt-2 bg-white rounded-2xl border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div class="relative mb-4">
                  <label for="full-name" class="leading-7 text-sm text-white">
                    Our Video Url
                  </label>
                  <input
                    value={videoUrl}
                    onChange={videoUrlHandler}
                    type="text"
                    class="w-full mt-2 bg-white border text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-2xl"
                  />
                </div>
                {loading ? (
                  <>
                     <Oval
                 ariaLabel="loading-indicator"
                 height={100}
                 width={100}
                 strokeWidth={1}
                 strokeWidthSecondary={2000}
                 color="purple"
                 secondaryColor="black"
               />
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => uploadVideo()}
                      class="bg-purple-900 text-black border-0 py-2 px-8 focus:outline-none rounded-full text-lg"
                    >
                      Upload
                    </button>
                  </>
                )}

                <p class=" text-gray-500 mt-3">
                    
                </p>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
        
          <h1 className="flex flex-col text-3xl justify-center items-center">
            Explore Videos Across The World
          </h1>
          {videoLoading ? (
            <><div className='flex justify-center'>
               <Oval
                 ariaLabel="loading-indicator"
                 height={100}
                 width={100}
                 strokeWidth={1}
                 strokeWidthSecondary={2000}
                 color="purple"
                 secondaryColor="black"
               />
               </div>
            </>
          ) : (
            <>
              {allvideo.map((item) => {
                return (
                  <>
                    <div className="flex flex-col justify-center items-center mt-5">
                      <iframe
                        allow="autoplay; gyroscope;"
                        allowfullscreen
                        className="w-1/4 aspect-square  object-fill rounded-3xl"
                        src={item.account.content}
                      ></iframe>
                      <div className="flex flex-wrap justify-start">
                        <div className="w-1/8 sm:w-4/12 px-4">
                          <img
                            src={item.account.profileUrl}
                            alt="..."
                            className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
                          />
                        </div>
                        <div class="mt-2 text-center md:text-left">
                          <h3 class="text-black fonr-bold text-md mb-2 mt-5 title-font ">
                            {item.account.userName}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          )}
        </>
      )}
      </div>
    </>
  );
};

export default upload;
