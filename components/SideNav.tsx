"use client";

import React, { useState } from "react";
import Header from "./Header";
import InnerNav from "./InnerNav";
import InnerContent from "./InnerContent";

const SideNav = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="drawer lg:drawer-open transition ease-in-out delay-150 duration-300">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" onChange={(e) => setIsChecked(e.target.checked)} />
      <div className="drawer-content flex flex-col relative">
        {/* Page content here */}
        <Header isChecked={isChecked} />
        <InnerContent />
      </div>
      <InnerNav isChecked={isChecked} setIsChecked={setIsChecked} />
    </div>
  );
};

export default SideNav;
