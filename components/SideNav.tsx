import React from "react";
import Header from "./Header";
import Logo from "@/public/assets/images/Logo.svg";
import Image from "next/image";
import {RiHome5Fill} from "react-icons/ri"
import {TiDocumentText} from "react-icons/ti";
import {FaRobot} from "react-icons/fa";
import {MdHelp} from "react-icons/md";
import {IoMdSettings} from "react-icons/io";

const SideNav = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Header />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-circle swap swap-rotate lg:hidden"
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
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu bg-accent h-screen">
        <li>
            <a className="tooltip tooltip-right" data-tip="lexy">
              <Image src={Logo} width={50} height={50} alt="lexy" />
            </a>
          </li>
          <li>
            <a className="tooltip tooltip-right" data-tip="Home">
              <RiHome5Fill className="text-3xl text-secondary" />
            </a>
          </li>
          <li>
            <a className="tooltip tooltip-right" data-tip="Documents">
              <TiDocumentText className="text-3xl text-secondary" />
            </a>
          </li>
          <li>
            <a className="tooltip tooltip-right" data-tip="Bots">
              <FaRobot className="text-3xl text-secondary" />
            </a>
          </li>
          <li>
            <a className="tooltip tooltip-right" data-tip="Help">
              <MdHelp className="text-3xl text-secondary" />
            </a>
          </li>
          <li>
            <a className="tooltip tooltip-right" data-tip="Settings">
              <IoMdSettings className="text-3xl text-secondary" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
