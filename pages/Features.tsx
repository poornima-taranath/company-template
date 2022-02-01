import React from 'react';
import tea from '../images/day80-tea.png';
import wallet from '../images/day78-wallet.png';
import knife from '../images/day77-pocket-knief.png';

export default function Features() {
  return (
    <div>
      <div className="font-black text-black-400 text-2xl md:text-4xl mx-20 mt-20 mb-10  md:mt-48 flex justify-center font-poppins">
        Featured Service that We Provide
      </div>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="h-5/12 w-2/3 md:h-80 md:w-56 bg-indigo-500 rounded-md mx-10 self-center">
          <img
            src={tea}
            alt="tea"
            className=" mt-5 md:mx-5 h-auto w-auto md:w-48 md:h-32"
          />
          <div className="flex flex-col justify-center flex-wrap">
            <p className="font-semibold text-white text-lg md:text-xl mx-4 self-center font-poppins">
              Keep tasks in one place
            </p>
            <span className="font-thin text-white mx-4 my-5 text-sm font-serif">
              Save time, avoid losing work and information, delegate, and track
              tasks to stay on schedule
            </span>
          </div>
        </div>
        <div className=" h-5/12 w-2/3 md:h-80 md:w-56 bg-blue-100 my-20 md:mt-56 self-center rounded-md mx-10 ">
          <img
            src={wallet}
            alt="tea"
            className="mt-5 h-auto md:mx-5 w-auto md:w-48 md:h-32 "
          />
          <div className=" flex flex-col justify-center">
            <p className="font-semibold text-black-200 text-lg md:text-xl mx-4 self-center font-poppins">
              Keep tasks in one place
            </p>
            <span className="font-thin text-black-100 mx-4 my-5 text-sm font-serif">
              Save time, avoid losing work and information, delegate, and track
              tasks to stay on schedule
            </span>
          </div>
        </div>
        <div className=" h-5/12 w-2/3 md:h-80 md:w-56 bg-yellow-100 self-center rounded-md mx-10">
          <img
            src={knife}
            alt="knife"
            className="mt-5 md:mx-5 h-auto w-auto md:w-48 md:h-32"
          />
          <div className="flex flex-col justify-center ">
            <p className="font-semibold text-black-200 text-lg md:text-xl self-center mx-4 font-poppins">
              Keep tasks in one place
            </p>
            <span className="font-thin text-black-100 my-5 mx-4 text-sm font-serif">
              Save time, avoid losing work and information, delegate, and track
              tasks to stay on schedule
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
