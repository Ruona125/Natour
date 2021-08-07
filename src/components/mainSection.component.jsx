import React from "react";
import "../styles/mainSection.styles.scss";
import "../styles/cards.styles.scss";
import NatureOne from "../images/nat-1-large.jpg";
import NatureTwo from "../images/nat-2-large.jpg";
import NatureThree from "../images/nat-3-large.jpg";

export const MainSection = () => {
  return (
    <main>
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Exciting tours for adventurous people
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">
              You're going to fall in love with nature
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Iaculis nunc sed augue lacus. Nec nam aliquam sem et tortor
              consequat id porta nibh.
            </p>

            <h3 className="heading-tertiary u-margin-bottom-small">
              Live adventure like you've never have before
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Iaculis nunc sed augue.
            </p>
            <a href="#" className="btn-text">
              Learn more &rarr;
            </a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                src={NatureOne}
                className="composition__photo composition__photo--p1"
                alt="photogrid 1"
              />
              <img
                src={NatureTwo}
                className="composition__photo composition__photo--p2"
                alt="photogrid 2"
              />
              <img
                src={NatureThree}
                className="composition__photo composition__photo--p3"
                alt="photogrid 3"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
