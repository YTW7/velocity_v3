import Head from "next/head";
import {useRouter} from 'next/router'
const Header = () => {
  const router = useRouter()
  return (
    <>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <button onClick={()=> router.push("/explore")} class="bg-white text-black font-bold py-2 px-4 rounded-3xl inline-flex items-center mx-5">
            EXPLORE
          </button>

          <button onClick={()=> router.push("/people")} class="bg-white text-black font-bold py-2 px-4 rounded-3xl inline-flex items-center">
            PEOPLE
          </button>

          <button onClick={()=> router.push("/myspace")} class="bg-white text-black font-bold py-2 px-4 rounded-3xl inline-flex items-center mx-5">
            MY SPACE
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
