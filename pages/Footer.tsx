import React from 'react';

export default function Footer() {
  return (
    <div className="ml-20">
      <div className="font-bold text-black-400 text-2xl md:text-4xl px-5 mr-10 mt-32 mb-8 flex justify-center font-poppins">
        Get Better Work Done
      </div>
      <p className="p-5 flex justify-center text-bold mb-12 font-muli">
        See why millions of people across 195 countries use Dash.
      </p>
      <div className="flex flex-col md:flex-row m-5 gap-2 justify-center">
        <button
          type="button"
          className=" h-10 w-48 md:w-64 text-gray-400 rounded-full border-2 text-sm font-semibold font-muli hover:border-pink-500"
        >
          {' '}
          Name@company.com
        </button>
        <button
          className=" hover:bg-indigo-500 hover:text-pink-500 h-2/3 w-32 md:h-auto md:w-auto md:mb-32 border-3 rounded-full p-2 border-indigo-400 font-medium text-white bg-indigo-600 font-poppins"
          type="button"
        >
          Try it free
        </button>
      </div>
    </div>
  );
}
