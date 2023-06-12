import React from "react";
import Avatar from "@/public/assets/images/avatar.svg";
import Logo from "@/public/assets/images/Logo.svg";
import Image from "next/image";
import SideNav from "./SideNav";

const Header = () => {
  return (
    <div className="navbar p-0 bg-secondary">
      <div className="navbar-start">
        <div className="dropdown">
          {/* <SideNav /> */}
        </div>
        <Image src={Logo} width={100} height={100} alt="logo" />
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary capitalize text-secondary">Create Doc</a>
        <div className="avatar ml-16 pr-10">
          <div className="w-24 rounded-full">
            <Image src={Avatar} width={20} height={10} alt="profile picture" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
