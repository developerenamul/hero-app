import React from "react";

const Stat = () => {
  return (
    <div className="p-16 bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white mt-10">
      <div className="max-w-[750px] mx-auto">
        <h2 className="text-center text-3xl font-bold mb-5">
          Trusted by Millions, Built for You
        </h2>
        <div className="stats shadow flex flex-col lg:flex-row text-center">
          <div className="stat">
            <div className="stat-title text-white">Total Reviews</div>
            <div className="stat-value text-white">906K</div>
            <div className="stat-desc text-white">46% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-title text-white">Download</div>
            <div className="stat-value text-white">29.6M</div>
            <div className="stat-desc text-white">21% more than last month</div>
          </div>

          <div className="stat ">
            <div className="stat-title text-white">Active Apps </div>
            <div className="stat-value ">132+</div>
            <div className="stat-desc text-white">31 more will launch</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
