import React from "react";
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-20 sm:mr-5 mr-0 my-5 feedback-card">
      <img
        src={quotes}
        alt="double_quotes"
        className="w-[42px] h-[47px] object-contain"
      />
      <p className="fon-poppins font-normal text-[18px] leading-[32px] text-white my-10">
        {content}
      </p>

      <div className="flex flex-row ">
        <img src={img} alt="img" className="h-[48px] w-[48px]" />
        <div className="ml-5">
          <h4 className="font-poppins font-semibold text-white text-[20px] leading-[32px]">
            {name}
          </h4>
          <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
