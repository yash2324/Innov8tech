import React from "react";
import Image from "next/image";
type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-12 p-10">
      <div className="col-span-7">
        <h1 className="text-2xl sm:text-4xl">Tech Updates for busy people</h1>
        <button>Browse Articles</button>
      </div>
      <div className="col-span-5">
        <Image
          src="/image.png"
          width={400}
          height={400}
          alt="text"
          className=""
        />
      </div>
    </section>
  );
};

export default HeroSection;
