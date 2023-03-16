import React from "react";
import AceHackLogo from "/assets/images/AceHack-logo.png";
import backgroundImage from "/assets/images/background-image.jpg";
import { ImLocation2 } from "react-icons/im";
import CountdownTimer from "../components/Timer";
import Icon from "../components/Icon";
import uem from "/assets/images/uem.png";
import acm from "/assets/images/acm.jpeg";
import rpLogo from "/assets/images/sponsors/rpLogo.jpg";

const Home = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div
      id="home"
      className="sticky top-0 z-0 pb-20 text-white scroll-smooth"
    >
      <div className="overlay"></div>
      <img
        className="bgVideo"
        src={backgroundImage}
        alt="aceHack background image"
      />
      <div className="flex flex-col justify-start items-center">
        <div className="w-full flex flex-row justify-end mb-12 md:mb-0">
            <Icon icon={rpLogo} height={'h-16'}/>
            <Icon icon={uem} height={'h-16'}/>
            <Icon icon={acm} height={'h-16'}/>
        </div>
        <img alt="AceHack Logo" className="min-w-[30%] w-[40%] max-w-[80%] mb-6 md:mb-0" src={AceHackLogo} />
        <CountdownTimer targetDate={new Date("2023-04-01T00:00:00")} />
        <div className="flex flex-row flex-wrap w-full justify-center gap-4 mb-6 md:mb-0">
        <div
          className="apply-button"
          data-hackathon-slug="acehack"
          data-button-theme="light"
          style={{ height: "44px", width: "312px" }}
        ></div>
        <div
          className="bg-cyan-500 rounded-md hover:bg-cyan-400"
          style={{ height: "44px", width: "312px" }}
        >
          <a href="https://linktr.ee/acehack" className="flex h-full w-full justify-center items-center text-xl font-semibold" target={"_blank"}>
            <p>Join Our Community &nbsp; </p>
          </a>
        </div>
        </div>
        <h2 className="break-words text-center mt-8 mb-10 text-2xl flex items-center font-bold">
          <ImLocation2 className="w-10 fill-blue-600" />
          <p>
            {" "}
            &nbsp; April 1<sup>st</sup> and 2<sup>nd</sup> @ University of Engineering and Management Jaipur
          </p>
        </h2>
      </div>
    </div>
  );
};

export default Home;
