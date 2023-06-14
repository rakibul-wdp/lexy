import React, { useState } from "react";
import Logo from "@/public/assets/images/Logo.svg";
import Image from "next/image";
import { RiHome5Fill } from "react-icons/ri";
import { TiDocumentText } from "react-icons/ti";
import { FaRobot } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

const InnerNav = ({ isChecked, setIsChecked }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsChecked(false);
  };

  if (isChecked === true && isHovered === false) setIsHovered(true);

  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul
        className={`menu bg-accent h-screen p-0 pb-20 flex items-center hover:items-start justify-between fixed ${
          isHovered && "w-52"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <li className="flex items-center">
            <a className="tooltip tooltip-right p-0" data-tip="lexy">
              {isHovered ? (
                <h2 className="text-3xl text-secondary font-bold pt-5">Lexy</h2>
              ) : (
                <Image src={Logo} width={80} height={80} alt="lexy" />
              )}
            </a>
          </li>
          <li className="mt-10 mb-5 flex items-start pl-5">
            <a
              className="tooltip tooltip-right p-0 text-secondary"
              data-tip="Home"
            >
              <span className="flex items-center">
                <RiHome5Fill className="text-3xl" />
                {isHovered && <p className="text-lg font-bold ml-3">Home</p>}
              </span>
            </a>
          </li>
          <li className="mb-5 flex items-start pl-5">
            <a
              className="tooltip tooltip-right p-0 text-primary"
              data-tip="Documents"
            >
              <span className="flex items-center">
                <TiDocumentText className="text-3xl" />
                {isHovered && (
                  <p className="text-lg font-bold ml-3">Documents</p>
                )}
              </span>
            </a>
          </li>
          <li className="flex items-start pl-5">
            <a
              className="tooltip tooltip-right p-0 text-secondary"
              data-tip="Bots"
            >
              <span className="flex items-center">
                <FaRobot className="text-3xl" />
                {isHovered && <p className="text-lg font-bold ml-3">Bots</p>}
              </span>
            </a>
          </li>
        </div>
        <div className="">
          <li className={`mb-5 flex items-start ${isHovered && "pl-5"}`}>
            <a
              className="tooltip tooltip-right p-0 text-secondary"
              data-tip="Help"
            >
              <span className="flex items-center">
                <MdHelp className="text-3xl" />
                {isHovered && <p className="text-lg font-bold ml-3">Help</p>}
              </span>
            </a>
          </li>
          <li className={`flex items-start ${isHovered && "pl-5"}`}>
            <a
              className="tooltip tooltip-right p-0 text-secondary"
              data-tip="Settings"
            >
              <span className="flex items-center">
                <IoMdSettings className="text-3xl" />
                {isHovered && (
                  <p className="text-lg font-bold ml-3">Settings</p>
                )}
              </span>
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default InnerNav;
