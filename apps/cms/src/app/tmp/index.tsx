'use client';

import React from "react";
import Image from "next/image";
import image23 from "./image-23.png";
import image24 from "./image-24.png";
import image25 from "./image-25.png";
import Prev2 from "./prev-2.svg";
import Next2 from "./next-2.svg";
import "./style.css";

export const ContentsView = (): JSX.Element => {
  return (
    <div className="contents-view">
      <div className="about-us">
        <div className="frame">
          <div className="relative w-full h-[300px]">
            <Image className="image" alt="Image" src={image23} fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="relative w-full h-[300px]">
            <Image className="img" alt="Image" src={image24} fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="relative w-full h-[300px]">
            <Image className="image-2" alt="Image" src={image25} fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="relative w-[24px] h-[24px]">
            <Prev2 className="prev" />
          </div>
          <div className="relative w-[24px] h-[24px]">
            <Next2 className="next" />
          </div>
        </div>
      </div>
    </div>
  );
};
