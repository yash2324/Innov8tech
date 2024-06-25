import React from "react";
import githubIcon from "../../../public/github-icon.svg";
import twitterIcon from "../../../public/twitter-icon.svg";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-gray-800 text-white py-12 px-4">
      <div className="flex container justify-between">
        <div className="flex flex-row items-center">
          <div>
            <div className="text-2xl mb-3">Yash Gupta</div>
            <div className="text-sm">© 2024 Yash Gupta</div>
          </div>
        </div>
        <div className="flex">
          <a
            href="https://github.com/yash2324"
            target="_blank"
            className="mr-3"
          >
            <Image src={githubIcon} alt="github" width={32} height={32} />
          </a>
          <a href="https://twitter.com/yashgupta023" target="_blank">
            <Image src={twitterIcon} alt="twitter" width={32} height={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
