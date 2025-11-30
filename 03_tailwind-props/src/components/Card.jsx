import React from 'react';

function Card({ username = 'Momin', btnText = 'visit me' }) {
  console.log(username);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md ">
      <img
        src="https://images.pexels.com/photos/18264716/pexels-photo-18264716.jpeg?_gl=1*1h1t9t8*_ga*MTg2NzI0NTM3Mi4xNzY0NTAyMjc2*_ga_8JE65Q40S6*czE3NjQ1MDY4NjEkbzIkZzEkdDE3NjQ1MDcxNDIkajYwJGwwJGgw"
        alt="HC"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {btnText} →
        </button>
      </div>
    </div>
  );
}

export default Card;
