"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../auth/Button";
import { SessionProvider } from "next-auth/react";
type Props = {};

const Header = (props: Props) => {
  return (
    <SessionProvider>
      <div className="px-2 py-4 border-b flex justify-between items-center">
        <Link href={"/"}>
          <div className="heading text-3xl">Yash's Blog</div>
        </Link>
        <Button />
      </div>
    </SessionProvider>
  );
};

export default Header;
