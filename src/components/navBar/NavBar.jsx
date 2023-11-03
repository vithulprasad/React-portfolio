import { useState } from "react";
import "./NavBar.css";
import NavbarSideBar from "./NavbarSideBar";



function NavBar() {
  const [color, setColor] = useState("home");
  const [toggle,setToggle] = useState(false)
  const handleColorChange = (x) => {
    setColor(x)
  };
  const handleToggle=()=>{
    
    if(toggle===true){
      setToggle(false)
    }else{
      setToggle(true)
    }
    
  }
  const changeHandler =(data)=>{
    setColor(data)
    handleToggle()
  }
  return (
    <>
    <div
      style={{fontFamily:"myFont"}}
      className="  w-full  h-[90px]  text-xl flex justify-between  bg-slate-100 shadow "
    >
      <div className="flex items-center text-2xl bg-gradient-to-r from-red-600 via-blue-500 to-red-400 text-transparent bg-clip-text">
        Vidhul Prasad
      </div>


      <div className="lg:hidden w-[40%] h-full  flex justify-end   items-center">
        <div className="w-1/2 h-full  flex justify-center items-center">
          <div onClick={()=>{handleToggle()}} id="toggle" className="bg-slate-100 ">
              <div   className={toggle==false ?"one bg-red-600":"toggle_one bg-red-600"}></div>
              <div   className={toggle==false ?"two bg-blue-600":"toggle_two bg-blue-600"}></div>
              <div   className={toggle==false ?"three bg-red-600":"toggle_three bg-red-600"}></div>
            </div>
        </div> 
      </div>
      
      <div className="w-[40%]  justify-around items-center lg:flex hidden ">
        <a href="#home"
          onClick={() => {
            handleColorChange("home");
          }}
          className={
            color == "home"
              ? "bg-gradient-to-r text-center w-[25%]  from-red-600 via-blue-700 to-red-400 inline-block text-transparent bg-clip-text text-2xl"
              : "bg-gradient-to-r text-center w-[25%] from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text hover:from-red-600 hover:via-blue-700 hover:to-red-400 hover:inline-block hover:text-transparent hover:bg-clip-text hover:text-2xl"
          }
        >
          Home
        </a>
        <a href="#about"
          onClick={() => {
            handleColorChange("about");
          }}
          className={
            color == "about"
              ? "bg-gradient-to-r text-center w-[25%]  from-red-600 via-blue-700 to-red-400 inline-block text-transparent bg-clip-text text-2xl"
              : "bg-gradient-to-r text-center w-[25%] from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text hover:from-red-600 hover:via-blue-700 hover:to-red-400 hover:inline-block hover:text-transparent hover:bg-clip-text hover:text-2xl"
          }
        >
          About
        </a>
        <a href="#work"
          onClick={() => {
            handleColorChange("work");
          }}
          className={
            color == "work"
              ? "bg-gradient-to-r text-center w-[25%]  from-red-600 via-blue-700 to-red-400 inline-block text-transparent bg-clip-text text-2xl"
              : "bg-gradient-to-r text-center w-[25%] from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text hover:from-red-600 hover:via-blue-700 hover:to-red-400 hover:inline-block hover:text-transparent hover:bg-clip-text hover:text-2xl"
          }
        >
          Work
        </a>
        <a href="#touch"
          onClick={() => {
            handleColorChange("get");
          }}
          className={
            color == "get"
              ? "bg-gradient-to-r text-center w-[25%]  from-red-600 via-blue-700 to-red-400 inline-block text-transparent bg-clip-text text-2xl"
              : "bg-gradient-to-r text-center w-[25%] from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text hover:from-red-600 hover:via-blue-700 hover:to-red-400 hover:inline-block hover:text-transparent hover:bg-clip-text hover:text-2xl"
          }
        >
          Get In Touch
        </a>
      </div>

    </div>
    {toggle == true ?   
     <div className="w-full h-[200px] flex justify-end">
          <NavbarSideBar routChange={changeHandler} data={color}/>     
    </div>:null}
 
          </>
  );
}

export default NavBar;
