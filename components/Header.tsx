import React, { useState } from "react";
import Avatar from "@/public/assets/images/avatar.svg";
import Logo from "@/public/assets/images/Logo.svg";
import Image from "next/image";
import SideNav from "./SideNav";

const Header = ({isChecked}: any) => {
  return (
    <div className="navbar p-0 bg-secondary">
      <div className="navbar-start">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-circle swap swap-rotate lg:hidden ml-2"
        >
          <input type="checkbox" />
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
        {!isChecked && <a className="btn btn-ghost normal-case text-xl -mt-[2.0635rem] lg:hidden">
          <Image src={Logo} width={80} height={80} alt="lexy" />
        </a>}
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary capitalize text-secondary px-7">
          Create Doc
        </a>
        <div className="avatar ml-8 md:ml-16 pr-10">
          <div className="w-20 rounded-full">
            <Image
              className="p-2"
              src={Avatar}
              width={500}
              height={500}
              alt="profile picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
