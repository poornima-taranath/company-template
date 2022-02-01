import React from 'react';
import banner from '../images/Image 5.svg';
// import background from '../images/bg.png';

export default function Home() {
  return (
    <div className="mx-10 py-5 dark:bg-[#13346b]">
      <div className="flex flex-row justify-between md:h-20 items-center">
        <div>
          <h2 className="font-bold text-indigo-600 text-3xl ml-3 mt-5 mb-5 p-2 md:ml-20 md:mt-10 sm:mb-10 md:p-5 align-baseline font-poppins font-black align-baseline md:text-5xl">
            Taskia
          </h2>
        </div>
        <div>
          <button
            className="border-2 rounded-full p-2 m-5 md:p-0 border-indigo-500 text-indigo-600 text-thin h-auto w-auto align-baseline justify-center md:w-32 md:h-10 md:justify-between  hover:bg-indigo-500 hover:text-[#8A44C4] align-baseline"
            type="button"
          >
            Try free
          </button>
        </div>
      </div>

      <div className="grid grid-col-1 lg:grid-cols-2">
        <div className="flex flex-col flex-wrap m-5 md:justify-center">
          <span className=" text-3xl md:text-5xl font-black font-poppins text-black-900 items-start md:mt-10 md:ml-20">
            Task management
          </span>
          <span className=" text-3xl md:text-5xl font-black font-poppins text-black-900 items-start md:ml-20">
            and lists tools
          </span>
          <span className="text-lg mt-5 text-gray-400 font-muli font-bold md:mt-10 md:ml-20">
            We believe that designing products and services in close partnership
            with our clients is the only way to have a real impact on their
            business.
          </span>
          <div className="flex flex-col mt-5 md:justify-start md:flex-row md:mt-10 order-3">
            <button
              type="button"
              className=" border-2 rounded-full hover:border-pink-500 w-48 h-10 md:w-64 md:ml-20 text-sm text-gray-300 font-semibold font-poppins justify-center md:mt-5 "
            >
              {' '}
              Name@company.com
            </button>
            <div className="m-3" />
            <button
              className="border-2 rounded-full mb-2 w-32 h-10 md:w-32 md:ml-5 border-indigo-400 font-bold text-white bg-indigo-600 font-poppins justify-center hover:bg-indigo-500 hover:text-pink-500 md:mt-5"
              type="button"
            >
              Try it free
            </button>
          </div>
        </div>

        <img
          src={banner}
          alt="main"
          className=" h-3/4 w-3/4 m-5 align-center order-1 lg:h-full lg:w-full lg:pr-10 lg:m-0 content-center"
        />
      </div>
    </div>
  );
}
