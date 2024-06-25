import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="px-2 py-4 border-b flex justify-between items-center">
      <Link href={"/"}>
        <div className="heading text-3xl">Yash's Blog</div>
      </Link>
      <button className="bg-black text-white py-5 px-3">Sign up </button>
    </div>
  );
};

export default Header;
