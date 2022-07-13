import React from "react";
import Image_Banner from "../images/Banner.jpg";
import "../Stylesheet/Banner.css";

const Banner = () => {
  return (
    <div className="Banner_container">
      <div className="Banner">
        <img className="Banner_image" src={Image_Banner} alt="Banner Images" />
      </div>
    </div>
  );
};

export default Banner;
