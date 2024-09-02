import React from "react";

import "./Chef.css";

import { images } from "../../constants";
import { SubHeading } from "../../components";

function Chef() {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Chef's World" />
        <h1 className="headtext__cormorant">What we belive in</h1>
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="" />
            <p className="p__opensans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            </p>
           
          </div>
          <p className="p__opensans">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis praesentium perferendis rem, reprehenderit itaque iste
              magni laborum voluptatibus vel est?
            </p>
          <div className="app_chef-sign">
            <p>Soumen Pal</p>
            <p className="p__opensans">Chef and Founder</p>
            <img src={images.sign} alt="sign" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chef;
