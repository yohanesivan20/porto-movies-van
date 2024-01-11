import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm m-2">
          A portofolio by <span className='font-bold'>Ivan Danasuta</span>, made with
        </p>
        <ul className='justify-center flex flex-wrap pl-0'>
            <li class="mr-1.5 mt-2 pl-0">
                <div class="items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-medium leading-5 text-stone-100 ">HTML</div>
            </li>
            <li class="mr-1.5 mt-2 pl-0">
                <div class="items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-medium leading-5 text-stone-100 ">React JS</div>
            </li>
            <li class="mr-1.5 mt-2 pl-0">
                <div class="items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-medium leading-5 text-stone-100 ">Tailwind CSS</div>
            </li>
            <li class="mr-1.5 mt-2 pl-0">
                <div class="items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-medium leading-5 text-stone-100 ">The Movie DB API</div>
            </li>
        </ul>
        <p className="text-xs mt-1">
          &copy; {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;