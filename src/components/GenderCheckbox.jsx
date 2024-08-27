import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <>
      <div className="flex gap-6 ">
        <div className=" flex gap-4">
          <label
            htmlFor=""
            className={`text-[16px] font-medium cursor-pointer gap-2 ${
               selectedGender === "male" ? "selected" : ""
            }`}
          >
            Male
          </label>
          <input type="checkbox" checked={selectedGender === "male"} 
          
          onChange={()=> onCheckboxChange("male")} className="w-full"
          
          />
        </div>
        <div className=" flex gap-4">
          <label htmlFor=""  className={`text-[16px] font-medium cursor-pointer gap-2 ${
              selectedGender === "female" ? "selected" : ""
            }`}>
            Female
          </label>
          <input type="checkbox" checked={selectedGender === "female"} 
          onChange={()=> onCheckboxChange("female")} />
        </div>
      </div>
    </>
  );
};

export default GenderCheckbox;
