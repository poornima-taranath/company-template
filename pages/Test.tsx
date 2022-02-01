import React from 'react';
import icon1 from '../images/Group 228.png';
import icon2 from '../images/Group 230.png';

function Test() {
  return (
    <div className="content-center ml-10">
      <h1 className="ml-10 text-2xl md:text-3xl font-bold p-5 flex justify-center font-poppins">
        Trust us and feel free to use our service
      </h1>

      <div className="grid grid-cols-3 md:grid-cols-7">
        <div className="m-5 md:col-start-1">
          <img
            src={icon1}
            alt="userphoto"
            className=" mt-5 mx-10 h-10 w-12 md:h-32 md:w-32 md:mt-10 md:ml-20"
          />
          <img
            src={icon2}
            alt="userphoto"
            className=" mt-5 mx-10 h-10 w-12 md:h-32 md:w-32  md:mt-20 md:ml-64"
          />
          <img
            src={icon1}
            alt="userphoto"
            className=" mt-5 mx-10 h-10 w-12 md:h-24 md:w-24 md:mt-20 md:ml-20 "
          />
        </div>
        <div className="mt-24 w-56  md:mt-56 md:w-72 md:col-start-4">
          <span className="text-3xl col-start-2 my-20 md:my-20 md:text-7xl text-indigo-500 font-bold font-poppins">
            100 000
          </span>
        </div>
        <div className="m-5 ml-10">
          <img
            src={icon2}
            alt="userphoto"
            className=" mt-5 h-10 w-12 mr-16 md:h-24 md:w-24  md:mt-10 md:ml-96"
          />
          <img
            src={icon1}
            alt="userphoto"
            className=" mt-5 h-10 w-12 md:h-32 md:w-32 md:mt-10 md:ml-32"
          />
          <img
            src={icon2}
            alt="userphoto"
            className="mt-5 h-10 w-12 md:h-32 md:w-32 md:mx-12 md:mt-32  md:ml-96"
          />
        </div>
      </div>
    </div>
  );
}

export default Test;
