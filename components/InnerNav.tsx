import React from "react";
import Logo from "@/public/assets/images/Logo.svg";
import Image from "next/image";
import { RiHome5Fill } from "react-icons/ri";
import { TiDocumentText } from "react-icons/ti";
import { FaRobot } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

const InnerNav = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu bg-accent h-screen p-0 pb-20 flex items-center justify-between">
        <div>
          <li>
            <a className="tooltip tooltip-right p-0" data-tip="lexy">
              <Image src={Logo} width={80} height={80} alt="lexy" />
            </a>
          </li>
          <li className="mt-10 mb-5 flex items-center">
            <a className="tooltip tooltip-right p-0" data-tip="Home">
              <RiHome5Fill className="text-3xl text-secondary" />
            </a>
          </li>
          <li className="mb-5 flex items-center">
            <a className="tooltip tooltip-right p-0" data-tip="Documents">
              <TiDocumentText className="text-3xl text-primary" />
            </a>
          </li>
          <li className="flex items-center">
            <a className="tooltip tooltip-right p-0" data-tip="Bots">
              <FaRobot className="text-3xl text-secondary" />
            </a>
          </li>
        </div>
        <div>
          <li className="mb-5">
            <a className="tooltip tooltip-right p-0" data-tip="Help">
              <MdHelp className="text-3xl text-secondary" />
            </a>
          </li>
          <li>
            <a className="tooltip tooltip-right p-0" data-tip="Settings">
              <IoMdSettings className="text-3xl text-secondary" />
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default InnerNav;
