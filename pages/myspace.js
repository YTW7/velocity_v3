import { useState } from "react";
import Header from "../buzz_component/InsideComponent/Header";
import { useBuzz } from "../Connector/buzz";
import Image from "next/image";
import {Oval} from "react-loader-spinner";
const MySpace = () => {
  const {
    allStatus,
    statusHandler,
    status,
    addStatus,
    loading,
    allFriend,
    myStatus,
    statusLoading,
    friendLoading,
  } = useBuzz();
  const [showWhichStatus, setShowWhichStatus] = useState(true);
  const [time, setTime] = useState();

  const timeConverter = (timeStamp) => {
    const a = new Date(timeStamp * 1000);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();

    const time = date + " " + month + " " + year + " " + hour + " " + min;
    setTime(time);
    console.log(time);
  };

  return (
    <>
    <div className="bg-[url('/bg.png')] rounded-t-2xl bg-cover ">
      <Header />
      <div class="mx-4 bg-purple-900 rounded-t-xl p-2">
        <div
          class="grid grid-cols-3 divide-x-4 "
        >
          <div>
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white flex flex-col items-center text-center ">
              Your Friends
            </h1>
            <div class="container px-5 py-5 mx-auto">
              <div class="flex flex-wrap -m-5 px-24 py-1 ">
                {friendLoading ? (
                  <>
                  <div className='flex justify-center'>
                  <Oval
                 ariaLabel="loading-indicator"
                 height={100}
                 width={100}
                 strokeWidth={1}
                 strokeWidthSecondary={2000}
                 color="white"
                 secondaryColor="white"
               />
               </div>
                  </>
                ) : (
                  <>
                    {allFriend.map((item, keys) => {
                      if (allFriend) {
                        return (
                          <>
                            <div
                              key={keys}
                              class="lg:w-full md:w-1/3 lg:mx-8 p-4 w-auto cursor-pointer shadow-lg mx-8 mb-5 bg-gray-200 rounded-lg"
                            >
                              <div className="flex flex-wrap justify-start">
                                <div className="w-6/12 sm:w-4/12 px-4">
                                  <img
                                    src={item.account.profileUrl}
                                    alt="..."
                                    className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
                                  />
                                </div>
                              </div>
                              <div class="mt-2 text-center md:text-left">
                                <h3 class="text-purple-900 font-bold text-md mb-2 title-font ">
                                  {item.account.name}
                                </h3>
                                <h3 class="text-black text-md  title-font ">
                                  Description - {item.account.description}
                                </h3>
                              </div>
                            </div>
                          </>
                        );
                      }
                    })}
                  </>
                )}
              </div>
            </div>
          </div>
          <div>
          <section class="text-gray-600 body-font">
              <div class="container px-2 py-5 mx-auto">
                <div class="flex flex-wrap w-full mb-10 flex-col items-center text-center">
                  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                    Share What's on your Mind
                  </h1>
                  <div
                    class="flex relative mb-3
            "
                  >
                    <input
                      value={status}
                      onChange={statusHandler}
                      placeholder="Write something"
                      type="text"
                      class="w-full bg-white rounded-full mt-2 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
                    />

                    {loading ? (
                      <>
                        <div className='flex justify-center'>
                  <Oval
                 ariaLabel="loading-indicator"
                 height={100}
                 width={100}
                 strokeWidth={1}
                 strokeWidthSecondary={2000}
                 color="white"
                 secondaryColor="white"
               />
               </div>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => addStatus()}
                          class="bg-white text-black py-3 mx-3 px-4 rounded-3xl  items-center"
                        >
                          Post
                        </button>
                      </>
                    )}
                  </div>
                  <div class="flex justify-center">
                    <button
                      onClick={() => setShowWhichStatus(true)}
                      class={`bg-white text-black py-4 px-10 rounded-3xl inline-flex items-center mx-10 mt-10 `}
                    >
                      <span>Public Posts</span>
                    </button>
                    <button
                      onClick={() => setShowWhichStatus(false)}
                      class={`bg-white text-black py-4 px-10 rounded-3xl inline-flex items-center mx-10 mt-10 `}
                    >
                      <span>Your Posts</span>
                    </button>
                  </div>

                  {/* <input class="lg:w-90 mt-2 h-70 leading-relaxed text-gray-500 bg-white rounded-full"></input> */}
                </div>
                <div class="container px-5 py-5 mx-auto">
                  <div class="flex flex-wrap -m-5 px-24 py-1 ">
                    {showWhichStatus ? (
                      <>
                        {statusLoading ? (
                          <>
                           <div className='flex justify-center'>
                  <Oval
                 ariaLabel="loading-indicator"
                 height={100}
                 width={100}
                 strokeWidth={1}
                 strokeWidthSecondary={2000}
                 color="white"
                 secondaryColor="white"
               />
               </div>
                          </>
                        ) : (
                          <>
                            {allStatus.map((item, keys) => {
                              {
                                () =>
                                  timeConverter(item.account.initTime.words[0]);
                              }
                              if (allStatus) {
                                return (
                                  <>
                                    <div
                                      key={keys}
                                      class="lg:w-full md:w-1/3 lg:mx-8 p-4 w-auto cursor-pointer shadow-lg mx-8 mb-5 bg-gray-200 rounded-lg"
                                    >
                                      <div className="flex flex-wrap justify-start">
                                        <div className="w-6/12 sm:w-4/12 px-4">
                                          <img
                                            src={item.account.profileUrl}
                                            alt="..."
                                            className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
                                          />
                                        </div>
                                      </div>
                                      <div class="mt-2 text-center md:text-left">
                                        <h3 class="text-purple-900 text-md mb-2 title-font ">
                                          Posted By {item.account.name}
                                        </h3>
                                        <h3 class="text-black text-md  title-font ">
                                          {item.account.status}
                                        </h3>
                                      </div>
                                    </div>
                                  </>
                                );
                              }
                            })}
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        {myStatus.map((item, keys) => {
                          {
                            () => timeConverter(item.account.initTime.words[0]);
                          }
                          if (myStatus) {
                            return (
                              <>
                                <div
                                  key={keys}
                                  class="lg:w-full md:w-1/3 lg:mx-8 p-4 w-auto cursor-pointer shadow-lg mx-8 mb-5 bg-gray-200 rounded-lg"
                                >
                                  <div className="flex flex-wrap justify-start">
                                    <div className="w-6/12 sm:w-4/12 px-4">
                                      <img
                                        src={item.account.profileUrl}
                                        alt="..."
                                        className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
                                      />
                                    </div>
                                  </div>
                                  <div class="mt-2 text-center md:text-left">
                                    <h3 class="text-red-500 text-md mb-2 title-font ">
                                      Posted By {item.account.name}
                                    </h3>
                                    <h3 class="text-black text-md  title-font ">
                                      {item.account.status}
                                    </h3>
                                  </div>
                                </div>
                              </>
                            );
                          }
                        })}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default MySpace;
