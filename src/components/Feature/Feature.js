import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const Feature = ({ feature }) => {
  return (
    <div>
      <div className="flex items-center  bg-indigo-400">
        <CheckBadgeIcon className="h-6 w-6 text-black-500" />
        <p className="text-2xl ml-2">{feature}</p>
      </div>
    </div>
  );
};

export default Feature;
