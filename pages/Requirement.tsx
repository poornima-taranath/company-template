import React from 'react';
import tab from '../images/tab photo.png';

export default function Requirement() {
  return (
    <div className="flex flex-col ml-5 mt-20 md:flex-row mr-5 md:mt-48 md:mb-32 md:justify-center">
      <img
        src={tab}
        alt="tab"
        className="mt-5 md:h-auto md:w-1/2 w-2/3 h-3/2 md:ml-32 self-center"
      />
      <div className="ml-10">
        <h1 className="text-2xl md:text-3xl font-bold p-1 font-poppins font-black mt-5 mr-8 w-96 self-center">
          Why do you need task management software?
        </h1>
        {/* <h1 className="text-2xl md:text-3xl font-bold p-1 font-poppins font-black mr-12 w-96">
          task management software?
        </h1> */}
        <p className="p-1 mt-5 md:mt-10 font-muli font-medium text-gray-400 mr-12 content-center">
          Do you waste time organizing sticky notes, searching your email and
          apps for to-dos, and figuring out what to work on first? Then you need
          one solution to prioritize your tasks, manage your time, and meet your
          deadlines.
        </p>
      </div>
    </div>
  );
}
