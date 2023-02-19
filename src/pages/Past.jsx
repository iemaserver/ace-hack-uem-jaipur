import React from "react";
import Features from "../components/Features";
import Pictures from "../components/Pictures";
import { FaUsers, FaUniversity, FaEnvelopeOpenText } from "react-icons/fa";
import { IoRocket } from "react-icons/io5";
import { IconContext } from "react-icons";


const Past = () => {
  return (
    <IconContext.Provider
      value={{style: { fontSize: "8rem", position: "relative", color:"black" }}}
    >
    <div className="text-white z-20 relative bg-indigo-900/50 backdrop-blur-lg w-full py-10">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold pb-10 flex-wrap">
          <span className="grad-text">AceHack 1.0</span> Highlights!
        </h1>
        <div className="flex sm:flex-row justify-evenly w-full p-10 flex-col">
          <Features icon={<FaEnvelopeOpenText/>} count="1000" text="Applications" color="blue" />
          <Features icon={<FaUsers/>} count="300" text="Participants" color="emerald" />
          <Features icon={<FaUniversity/>} count="10" text="Universities" color="blue"/>
          <Features icon={<IoRocket/>} count="80" text="Projects" color="emerald"/>
        </div>
        <h1 className="grad-text text-4xl font-bold py-6">Pictures</h1>
        <div className="relative w-full flex gap-6 justify-start overflow-x-auto p-10 scrollbar-hide snap-x">
          {/* <div className="m-64"></div> */}
          <Pictures imgSrc={"https://plus.unsplash.com/premium_photo-1663040077027-d74f3beaa46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}/>
          <Pictures imgSrc={"https://plus.unsplash.com/premium_photo-1663040077027-d74f3beaa46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}/>
          <Pictures imgSrc={"https://plus.unsplash.com/premium_photo-1663040077027-d74f3beaa46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}/>
          <Pictures imgSrc={"https://plus.unsplash.com/premium_photo-1663040077027-d74f3beaa46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}/>
          <Pictures imgSrc={"https://plus.unsplash.com/premium_photo-1663040077027-d74f3beaa46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}/>
          <Pictures imgSrc={"https://plus.unsplash.com/premium_photo-1663040077027-d74f3beaa46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}/>
        </div>
      </div>
    </div>
    </IconContext.Provider>
  );
};

export default Past;
