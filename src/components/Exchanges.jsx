import React from "react";
import Flag from "../partials/Flag";

const exchanges = [
  {
    flag: "PumpFun",
    title: "Nubdog",
    link: "https://dexscreener.com/",
  },
];

const Exchanges = () => {
  return (
    <div id="exchanges" className="max-w-340 mx-auto py-12">
      <div className="my-16">
        <h2 className="font-stopbuck text-6xl text-duis text-shadow text-center">
          Exchanges
        </h2>
        <h3 className="font-stopbuck text-2xl text-center text-black">
          probably nothing 🤔
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-flow-col gap-5 gap-y-20 justify-center justify-items-center">
        {exchanges.map((ex, i) => (
          <div key={i} className="shrink-0">
            <Flag flag={ex.flag} title={ex.title} link={ex.link} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exchanges;
