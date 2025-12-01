// ...existing code...
import React from "react";

const Hero = () => {
  return (
    <div className="w-full">
      <div
        className="w-full bg-[url('/kawaii.png')] bg-center bg-cover bg-no-repeat -z-10
                   h-[35vh] sm:h-[45vh] md:h-[60vh] lg:h-screen"
        role="img"
        aria-label="Hero background"
      />
    </div>
  );
};

export default Hero;
// ...existing code...