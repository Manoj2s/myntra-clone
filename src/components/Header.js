import React from "react";
import myntralogo from "./images/myntralogo.png";

function Header() {
  return (
    <div className="flex  h-[80px]">
      <div className="w-[10%] flex justify-center items-center">
        <img className="h-[60px]" src={myntralogo} alt="myntralogo"></img>
      </div>
      <div className="w-[50%] flex flex-row items-center">
        <div className="px-[10px]">
          <a className="font-bold" href="#">
            MEN
          </a>
        </div>
        <div className="px-[10px]">
          <a className="font-bold" href="#">
            WOMEN
          </a>
        </div>
        <div className="px-[10px]">
          <a className="font-bold" href="#">
            KIDS
          </a>
        </div>
        <div className="px-[10px]">
          <a className="font-bold" href="#">
            HOME & LIVING
          </a>
        </div>
        <div className="px-[10px]">
          <a className="font-bold" href="#">
            BEAUTY
          </a>
        </div>
        <div className="px-[10px]">
          <a className="font-bold" href="#">
            STUDIO
          </a>
        </div>
      </div>
      <div className="w-[35%]  flex justify-center items-center relative">
        <div className="absolute left-[50px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <input
          className="h-[60%] w-[80%] bg-[#f5f5f6] rounded-xl pl-[40px] focus:bg-[white] focus:outline-none focus:border-[2px]"
          type="text"
          placeholder="Search for products, brands, and more..."
        />
      </div>
      <div className="w-[15%] flex flex-row items-center">
        <div className="px-[10px]">
          <div className="px-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
          <div>
            <p className="font-bold text-[14px]">Profile</p>
          </div>
        </div>
        <div className="px-[10px]">
          <div className="px-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>
          <div>
            <p className="font-bold text-[14px]">Wishlist</p>
          </div>
        </div>

        <div className="px-[10px]">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
          <div>
            <p className="font-bold text-[14px]">Bag</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
