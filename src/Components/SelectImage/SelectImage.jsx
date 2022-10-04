import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountainSun } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
const SelectImage = ({ imageSrc, setImageSrc }) => {
  const imageHandler = (e) => {
    // to allow gets files/images from my computer
    const reader = new FileReader();
    reader.onload = () => {
      //  reader.readystate
      // 0 === empty
      // 1 === loading
      // 2 === done
      if (reader.readyState === 2) {
        setImageSrc(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <section className="select-image-container">
      <div className="image-holder">
        {imageSrc ? (
          <img src={imageSrc} alt="user" className="select-image-user" />
        ) : (
          <FontAwesomeIcon
            icon={faMountainSun}
            color="#606060"
            className="select-image-user-fa"
          />
        )}
      </div>

      <input
        type="file"
        name="image-upload"
        id="input"
        accept="image/*"
        onChange={imageHandler}
        style={{
          display: "none",
        }}
      />
      <label htmlFor="input">
        <p className="select-image-button">select image</p>
      </label>
    </section>
  );
};

export default SelectImage;
