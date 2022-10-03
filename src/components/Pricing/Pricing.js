import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const Pricing = () => {
  const PriceOptions = [
    {
      id: 1,
      plan: "Free",
      price: 0,
      features: [
        "Basic plan ",
        "Get limited security",
        "Optimization starter",
        "Have a chance to upgrade",
      ],
    },
    {
      id: 2,
      plan: "Platinum",
      price: 9.99,
      features: [
        "Free all Basic plan ",
        "Get unlimited security",
        "Optimization cool",
        "Get Unlimited Features",
      ],
    },
    {
      id: 3,
      plan: "Premium",
      price: 29.99,
      features: [
        "Free all Basic plan ",
        "Include All platinum",
        "Get unlimited security",
        "Optimization cool",
        "Get Unlimited Features",
      ],
    },
  ];
  return (
    <div>
      <h1 className="bg-orange-400 p-6 text-4xl font-bold mt-8">
        Best Deal Of the Year
      </h1>
      <div className="grid md:grid-cols-3 gap-8 ">
        {PriceOptions.map((Option) => (
          <PriceOption key={Option.id} option={Option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
