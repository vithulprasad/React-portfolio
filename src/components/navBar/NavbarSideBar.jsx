import { useState } from "react";
import PropTypes from "prop-types"; // Correct import for PropTypes

function NavbarSideBar({ routChange, data }) {
  const [selected, setSelected] = useState("Home");
  console.log(data, 'this is the small component');

  const handleSelect = (x) => {
    setSelected(x);
    routChange(x);
    console.log(selected);
  }

  return (
    <div className="h-[200px] w-full mr-3 " style={{ fontFamily: "myFont" }}>
      <div onClick={() => { handleSelect("Home") }} className={data !== "Home" ? "w-full h-[25%] flex justify-center items-center my-1 hover:bg-gradient-to-r hover:from-red-400 hover:via-blue-400 hover:to-red-400 hover:text-white" : "w-full h-[25%] flex justify-center items-center bg-gradient-to-r from-red-400 via-blue-400 to-red-400 text-white"}>
        <a href="#home" >Home</a>
      </div>
      <div onClick={() => { handleSelect("About") }} className={data !== "About" ? "w-full h-[25%] flex justify-center items-center bg-gray-100 my-1" : "w-full h-[25%] flex justify-center items-center bg-gradient-to-r from-red-400 via-blue-400 to-red-400 text-white"}>
        <a href="#about">About</a>
      </div>
      <div onClick={() => { handleSelect("Work") }} className={data !== "Work" ? "w-full h-[25%] flex justify-center items-center bg-gray-100 my-1" : "w-full h-[25%] flex justify-center items-center bg-gradient-to-r from-red-400 via-blue-400 to-red-400 text-white"}>
        <a href="#work">Work</a>
      </div>
      <div onClick={() => { handleSelect("touch") }} className={data !== "touch" ? "w-full h-[25%] flex justify-center items-center bg-gray-100 my-1" : "w-full h-[25%] flex justify-center items-center bg-gradient-to-r from-red-400 via-blue-400 to-red-400 text-white"}>
        <a href="#touch">Get in Touch</a>
      </div>
    </div>
  );
}

NavbarSideBar.propTypes = {
  routChange: PropTypes.func,
  data: PropTypes.string, // Corrected to PropTypes.string for "data"
};

export default NavbarSideBar;
