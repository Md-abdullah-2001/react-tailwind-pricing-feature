import React from "react";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { features } = option;
  return (
    <div className="bg-indigo-400 m-2 rounded p-4 ">
      <h3 className="text-white">
        <span className="text-6xl font-bold ">{option.price}</span>
        <span className="text-4xl">/mo</span>
      </h3>
      <p className="text-3xl">{option.plan}</p>
      {features.map((feature) => (
        <Feature feature={feature}></Feature>
      ))}
      <button className="bg-green-600 w-full mt-6 rounded-2xl text-white font-bold text-2xl p-2 ">
        Buy Now
      </button>
    </div>
  );
};

export default PriceOption;
