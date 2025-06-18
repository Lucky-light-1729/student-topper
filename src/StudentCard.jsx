import React from "react";

const Card = ({ imgUrl, StudentName, StudentClass, StudentPercentage, StudentSchool }) => {
  return (
    <div className="w-[200px] bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-4 flex flex-col items-center gap-2 text-white shadow-md border border-white/30 hover:shadow-lg transition-shadow duration-300">
      <img
        src={imgUrl}
        alt={StudentName + " image"}
        className="w-20 h-20 object-cover rounded-md"
      />
      <p className="font-bold text-lg truncate">{StudentName}</p>
      <p className="font-semibold text-sm"><span>Class :</span>{StudentClass}</p>
      <p className="font-semibold text-sm">
        {StudentPercentage > 90 ? `${StudentPercentage}% 🥇`: `${StudentPercentage}%`
            }
      </p>
      <p className="font-semibold text-sm">{StudentSchool}</p>
    </div>
  );
};

export default Card;
