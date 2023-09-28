import React, { useState } from 'react';

function InputField({value, handleChange, placeholder = "Enter some text" }) {


  return (
    <input 
      className={`w-full h-full bg-transparent text-white focus:outline-none`}
      type="text" 
      value={value} 
      onChange={handleChange} 
      placeholder={placeholder}
    />
  );
}

export default InputField;






