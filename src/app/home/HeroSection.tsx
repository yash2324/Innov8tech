import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-12 p-10">
      <div className="col-span-7 w-full place-self-center text-center sm:text-left justify-self-start">
        <h1 className="text-2xl sm:text-4xl md:text-6xl md:leading-normal">
          Tech updates for busy people
        </h1>
        <h2>Stay up-to-date with the latest tech news and announcements.</h2>

        <Link
          href="/blog/all"
          className="mx-auto sm:mx-0 text-white block w-fit bg-indigo-500 px-4 py-2 sm:px-6 sm:py-4 mt-3 border-2 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]"
        >
          Browse Articles
        </Link>
      </div>
      <div className="col-span-5 text-center">
        <Image
          src="/image.png"
          width={400}
          height={400}
          alt="text"
          className="justify-center place-self-center items-center"
        />
      </div>
    </section>
  );
};

export default HeroSection;
