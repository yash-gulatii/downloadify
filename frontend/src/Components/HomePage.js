import React from "react";

export const HomePage = () => {
  return (
    <div className="wireframe">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <div className="group">
              <div className="overlap-group-2">
                <div className="rectangle" />
                <img className="vector" alt="Vector" src="vector-1.svg" />
              </div>
            </div>
            <img
              className="downloadify-logos"
              alt="Downloadify logos"
              src="downloadify-logos-black-2.png"
            />
            <img className="logo" alt="Logo" src="logo.svg" />
            <div className="group-2">
              <div className="overlap-2">
                <div className="text-wrapper">Download</div>
                <img className="line" alt="Line" src="line-1.svg" />
              </div>
              <div className="text-wrapper-2">About</div>
            </div>
          </div>
          <div className="text-wrapper-3">Download</div>
        </div>
        <p className="p">What you want to download?</p>
        <div className="overlap-wrapper">
          <div className="div-wrapper">
            <div className="text-wrapper-4">Song</div>
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-3">
            <div className="text-wrapper-5">Playlist</div>
          </div>
        </div>
        <div className="group-3">
          <div className="overlap-4">
            <div className="text-wrapper-6">Album</div>
          </div>
        </div>
        <div className="group-4">
          <p className="text-wrapper-7">
            Copyright © 2023 | All Rights Reserved
          </p>
          <p className="text-wrapper-8">Developed and Designed by Yash</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
