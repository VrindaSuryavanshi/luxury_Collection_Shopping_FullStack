import React from "react";

const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem]  mx-3">
      <div className="h-[13rem] w-[10rem] border border-black">
        <img
          className="object-cover object-top w-full h-full"
          src="https://m.media-amazon.com/images/I/51BV8zAE0IL._SY550_.jpg"
          alt=""
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">LOCAVESTIR Girls T-shirt</h3>
        <p className="mt-2 text-xs text-gray-500">
        Round Neck Regular Loosefit Longline Drop Shoulder Boho Style T-Shirt, Modern Era Girl Graphic Prints Black 8-9Y
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
