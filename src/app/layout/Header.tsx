import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="px-2 py-4 border-b flex justify-between items-center">
      <div className="heading text-3xl">Header</div>
      <button className="bg-black text-white py-5 px-3">Sign up </button>
    </div>
  );
};

export default Header;
