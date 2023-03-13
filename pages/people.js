import Image from "next/image";
import { useState } from "react";
import Header from "../buzz_component/InsideComponent/Header";
import { useBuzz } from "../Connector/buzz";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { IoMdPersonAdd } from "react-icons/io";
import {Oval} from "react-loader-spinner";
const main = () => {
  const { allUsers, addFriendfun, peopleLoading } = useBuzz();
  const [lowerBound, setLowerBound] = useState(0);
  const [upperBound, setUpperBound] = useState(3);

  console.log("length", allUsers.length);
  const showNext = () => {
    setLowerBound(upperBound);
    setUpperBound(upperBound + 3);
  };
  const showPrev = () => {
    setUpperBound(lowerBound);
    setLowerBound(lowerBound - 3);
  };
  return (

     <div className="bg-[url('/bg.png')] rounded-t-2xl bg-cover "> 
      <Header />
      {/* <button class="bg-black py-1 px-3 rounded-full inline-flex justify-end ">
        AAAA
      </button> */}

     
      <section class="text-black body-font mx-5">
        <div class="container px-20 py-5 mx-auto ">
          <div class="flex flex-wrap -m-5 px-24 py-1 sm:px-2 ">
            {}
            {allUsers.map((item, keys) => {
              if (keys < upperBound && keys >= lowerBound) {
                return (
                  <>
                    {peopleLoading ? (
                      <>
                       <div className='flex justify-center'>
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
                        <div
                          key={keys}
                          class="lg:w-1/4 md:w-1/3 lg:mx-8 p-4 w-auto px-10 cursor-pointer shadow-lg mx-8 mb-5 bg-gray-200 rounded-lg"
                        >
                          <a class="block relative rounded overflow-hidden">
                            <img
                              alt="ecommerce"
                              class="inset-0 w-full h-full object-cover object-center bg-purple-900 rounded-3xl"
                              src={item.account.profileUrl}
                            />
                          </a>
                          <div class="mt-2 text-center md:text-left">
                            <h3 class="text-black font-bold text-md  title-font ">
                              {item.account.name}
                            </h3>
                            <div class="flex justify-start">
                              <h2 class=" text-gray-900 title-font text-sm  font-sans">
                                Gender-{item.account.gender}
                              </h2>
                              <h2 class=" text-gray-900 title-font text-sm mx-5 font-sans">
                                Country-{item.account.country}
                              </h2>
                              <button class="bg-black py-1 px-3 rounded-full inline-flex items-center">
                                <IoMdPersonAdd
                                  onClick={() =>
                                    addFriendfun(
                                      item.account.name,
                                      item.account.gender,
                                      item.account.age,
                                      item.account.profileUrl,
                                      item.account.description,
                                      item.account.country
                                    )
                                  }
                                  className="text-2xl text-white"
                                />
                              </button>
                            </div>
                            <h2 class=" text-gray-900 title-font text-sm mt-2 font-sans">
                              Age - {item.account.age}
                            </h2>
                            <h2 class=" text-gray-900 title-font text-sm mt-2 font-sans">
                              Friends - {item.account.totalFriend}
                            </h2>
                            <h2 class=" text-gray-900 title-font text-sm mt-2 font-sans">
                              Description of {item.account.name} -{" "}
                              {item.account.description.slice(0, 50) + "....."}
                            </h2>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                );
              }
            })}
          </div>
        </div>
        <div className="bg-purple-900 rounded-full flex flex-col ">
          <BsArrowRight className="m-auto text-xl" onClick={() => showNext()} />
          <BsArrowLeft className="m-auto text-xl" onClick={() => showPrev()} />
        </div>
      </section>
      <br/>
      </div>

  );
};

export default main;
