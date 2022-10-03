import React from "react";

const Links = (props) => {
  const { rout } = props;

  return (
    <li className="mr-8 text-2xl  text-slate-200 mt-4">
      <a href="\">{rout.name}</a>
    </li>
  );
};

export default Links;
