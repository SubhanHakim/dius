import React from "react";

const About = () => {
  return (
    <div className="relative">
      <div className="flex absolute -top-24 max-w-full overflow-clip">
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
      </div>
      <div id="about" className="max-w-340 px-4 py-10 sm:py-14 mx-auto">
        <div className="my-7">
          <h2 className="font-stopbuck text-6xl text-duis text-shadow text-center mt-14">
            About
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="">
            <img
              className="h-full object-cover"
              src="/collection/9.png"
              width={700}
              height={700}
              alt="Dui Image"
            />
          </div>

          <div className="p-4 h-full sm:p-6">
            <h3 className="font-mono text-lg sm:text-2xl text-[#33271e] tracking-widest text-justify sm:text-left">
              <p className="indent-12">
                <span className="text-3xl font-bold">Dui</span>, the legendary
                meme dog whose uniquely expressive face captured hearts across
                the internet.{" "}
                <span className="font-semibold italic">{'"meme dog"'}</span>{" "}
                DUIS is inspired by Dui, the iconic meme dog loved for his
                unique expressions.{" "}
              </p>
              <p className="indent-12 mt-3">
                His photos quickly went viral, making him an instant internet
                sensation. People adored his quirky expressions, which perfectly
                captured countless relatable moods, turning him into an iconic
                meme figure across the internet.{" "}
                <span className=" italic font-bold">Dui</span> into a staple of
                internet humor.
              </p>
              <p className="indent-12 mt-3">
                His lovable presence brought joy and laughter to people around
                the world, turning him into a lasting symbol of positivity and
                light-hearted fun.
              </p>
            </h3>
          </div>
        </div>

        <div className="mt-10 font-mono text-lg sm:text-2xl text-[#33271e] tracking-widest text-center">
          <p className="text-4xl p-10">
            Buy now{" "}
            <span className="text-5xl font-bold underline decoration-duis">
              Dius
            </span>{" "}
            is forever on{" "}
            <span className="text-5xl bg-linear-to-r from-[#9945FF] to-[#14F195] inline-block text-transparent bg-clip-text font-bold">
              Solana
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
