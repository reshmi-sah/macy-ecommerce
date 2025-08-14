import React from "react";

const Macyecom = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="group [perspective:1000px] w-64 h-80">
        
        {/* Card container */}
        <div className="relative w-full h-full transition-transform duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          
          {/* Front Side */}
          <div className="absolute w-full h-full bg-white flex justify-center items-center border rounded-lg shadow-lg [backface-visibility:hidden]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="Logo"
              className="w-24 h-24"
            />
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full bg-blue-500 text-white border rounded-lg shadow-lg p-5 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center">
            <h2 className="text-xl font-bold">John Doe</h2>
            <p>Age: 20</p>
            <p>Class: 12th</p>
            <p>Location: New York</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Macyecom;
