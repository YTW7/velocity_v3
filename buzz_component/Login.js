import Image from 'next/image'
import { useState } from "react";
import { useBuzz } from "../Connector/buzz";
import { LoginUtil } from './LoginUtil';
import { Link } from 'react-scroll';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from "react-loader-spinner";
const Login = () => {
  const {
    initialized,
    transactionPending,
    name,
    age,
    gender,
    profileUrl,
    country,
    description,
    nameHandler,
    ageHandler,
    genderHandler,
    profileUrlHandler,
    countryHandler,
    descriptionHandler,
    initializeUser,
    loading,
  } = useBuzz();

  const {turnLoginFalse} = LoginUtil()
  


  const LoginClick = () => {
    initializeUser()
    turnLoginFalse()
    
  }
  return (
    <>
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
      <section class="text-gray-600 body-font relative my-18" id='login' >
        <div class="container px-5 py-24 mx-auto flex justify-center sm:flex-nowrap flex-wrap ">
          {/* <div class="lg:w-2/3 md:w-1/2 bg-white rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"> */}
            {/* <div
             
              width="100%"
              height="100%"
              class="absolute inset-0 bg-white rounded-3xl"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
            >
            <h1 className='flex justify-left mx-10 text-black text-9xl mt-5'>With Velocity</h1>
              <h1 className='flex justify-left mx-10 text-purple-800 text-9xl mt-5'>You can make friends</h1>
              <h1 className='flex justify-left mx-10 text-black text-9xl mt-5'>way to</h1>
              <h1 className='flex justify-left mx-10 text-purple-800 text-9xl mt-5'>socialize ...... !!</h1>
            </div> */}
           
          {/* </div> */}
          <div class=" bg-black flex flex-col w-4/5  mt-8 p-10 rounded-3xl">
            <h2 class="text-white text-lg mb-1 font-medium title-font">
              CREATE YOUR ACCOUNT
            </h2>
            <p class="leading-relaxed mb-5 text-white">
              Enter Profile Details
            </p>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-white">
                Name
              </label>
              <input
                placeholder="Enter Your Name"
                onChange={nameHandler}
                value={name}
                type="text"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-white">
                Age
              </label>
              <input
                placeholder="Enter Your Age"
                onChange={ageHandler}
                value={age}
                type="text"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-white">
                Gender
              </label>
              <input
                placeholder="Enter Your Gender"
                onChange={genderHandler}
                value={gender}
                type="text"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-white">
                Profile Picture Url
              </label>
              <input
                placeholder="Enter Your Profile Url"
                onChange={profileUrlHandler}
                value={profileUrl}
                type="text"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-white">
              Set your Bio
              </label>
              <input
                placeholder="Tell Abount Yourself"
                onChange={countryHandler}
                value={country}
                type="text"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div><div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-white">
                Enter Your Country
              </label>
              <input
                placeholder="Enter Your Country"
                onChange={descriptionHandler}
                value={description}
                type="text"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <br/>
            {loading ? (
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
        
                <button
                  onClick={() => LoginClick()}
                  disabled={transactionPending}
                  class="text-black bg-white font-bold border-0 py-2 px-6 focus:outline-none hover:bg-transparent text-lg rounded-2xl"
                >
                  Create Account
                </button>
              
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
