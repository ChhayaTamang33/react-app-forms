import PhoneInput from "react-phone-number-input";
import React, { useState } from "react";
import "react-phone-number-input/style.css";

const ReactPhone = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <PhoneInput
        name="phoneNumber"
        className="bg-white border-2 border-gray-300 rounded-full "
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};
export default ReactPhone;
