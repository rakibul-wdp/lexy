import React from "react";
import { HiPencil } from "react-icons/hi";

const InnerContent = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mt-32 md:mt-36 mb-10 ml-10 lg:ml-28 mr-10 h-screen">
      <div className="bg-secondary p-5 pt-10 rounded-lg md:mr-5 mb-10 md:mb-0">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full mb-5"
        />
        <ul className="menu bg-secondary w-full rounded-box p-0">
          <li>
            <a>Week 23 Class Schedule</a>
          </li>
          <li>
            <a>Class & Membership Pricing 2023</a>
          </li>
          <li>
            <a>Free Trial Promotion September</a>
          </li>
        </ul>
      </div>
      <div className="bg-secondary w-full md:ml-5 rounded-lg">
        <div className="flex items-center justify-between">
          <div></div>
          <HiPencil className="text-3xl text-[#727272] mt-3 mr-5" />
        </div>
        <div className="divider mt-0"></div>
        <div className="px-14 lg:px-32 lg:pt-32 pt-14 mb-5 lg:mb-0 overflow-y-auto max-h-[85vh]">
          <h1 className="text-3xl lg:text-4xl font-bold mb-5">
            Human Resources Onboarding Flow
          </h1>
          <div className="mb-5">
            <h3 className="text-xl font-semibold mb-1">Objective:</h3>
            <p>
              To provide a structured onboarding process for new employees,
              ensuring a smooth transition into the organization and promoting
              engagement and productivity from day one.
            </p>
          </div>
          <div className="mb-5">
            <h3 className="text-xl font-semibold mb-1">Scope:</h3>
            <p>
              This SOP covers the onboarding process for all enw employees
              joining the organization, from the time of accepting the job offer
              until the completion of their initial onboarding period.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">Responsibilities:</h3>
            <h4 className="font-semibold">1. Human Resources Department:</h4>
            <ul className="list-disc list-inside ml-6">
              <li>Coordinate and oversee the onboarding process.</li>
              <li>
                Prepare and provide necessary documentation and materials.
              </li>
              <li>Facilitate the orientation program and training sessions.</li>
              <li>
                Support new employees throughout their onboarding journey.
              </li>
            </ul>
            <h4 className="font-semibold">2. Hiring Manager:</h4>
            <ul className="list-disc list-inside ml-6">
              <li>
                Introduce the new employee to the team and provide an overview
                of their role.
              </li>
              <li>
                Communicate expectations and clarify job responsibilities.
              </li>
              <li>Assgn a buddy or mentor to guide the new employee.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerContent;
