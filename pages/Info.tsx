import React from 'react';
import seamless from '../images/seamless.png';

export default function Info() {
  return (
    <div className="flex flex-col md:flex-row md:mt-48 md:mb-32 mr-5 md:justify-center">
      <div className="ml-10 self-center">
        <h1 className="text-2xl md:text-3xl font-bold md:ml-32 p-5 font-poppins">
          Seamless Team Workflow & Efficient Task Management
        </h1>
        <p className="md:ml-32 p-5 font-muli text-gray-400 ">
          Do you waste time organizing sticky notes, searching your email and
          apps for to-dos, and figuring out what to work on first? Then you need
          one solution to prioritize your tasks, manage your time, and meet your
          deadlines.
        </p>
      </div>
      <img
        src={seamless}
        alt="seamless"
        className=" mt-5 md:h-auto md:w-1/2 w-2/3 h-3/2 md:ml-20 md:mr-10 self-center"
      />
    </div>
  );
}
