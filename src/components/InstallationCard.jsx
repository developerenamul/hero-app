import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
const InstallationCard = ({ app, onUninstall }) => {
  const { image, title, ratingAvg, downloads, size, id } = app;
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center shadow-xl mb-10 p-3 gap-3">
      <div className="flex items-center gap-3 ">
        <img
          src={image}
          alt={title}
          className="w-[60px] h-[60px] object-cover"
        />
        <div>
          <h2>{title}</h2>
          <div className="flex gap-5">
            <p className="flex gap-2 items-center">
              <FaDownload />
              {downloads}
            </p>
            <p className="flex gap-2 items-center">
              <FaStar />
              {ratingAvg}
            </p>
            <p className="flex gap-2 items-center">{size}MB</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => onUninstall(id)}
        className="btn bg-red-500 hover:bg-red-600 text-white"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstallationCard;
