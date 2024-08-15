import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <>
      <div className="flex">
        <div className="form-control">
          <label
            htmlFor=""
            className={`cursor-pointer gap-2 ${
               selectedGender === "male" ? "selected" : ""
            }`}
          >
            Male
          </label>
          <input type="checkbox" checked={selectedGender === "male"} 
          onChange={()=> onCheckboxChange("male")}
          
          />
        </div>
        <div className="form-control">
          <label htmlFor=""  className={`cursor-pointer gap-2 ${
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
