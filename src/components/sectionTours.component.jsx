import React from "react";
import "../styles/sectionTours.styles.scss";
import "../styles/mainSection.styles.scss";

export const SectionTours = () => {
  return (
    <section className="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most populr tours</h2>
      </div>

      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  The Sea Explorer
                </span>
              </h4>
              <div className="card__details">
                <ul className="">
                  <li>3 days tour</li>
                  <li>Up to 30 people</li>
                  <li>2 tour guides</li>
                  <li>Sleep in cozy hotels</li>
                  <li>Difficulty: easy</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              BACK
            </div>
          </div>
        </div>
        <div className="col-1-of-3">col 1 of 3</div>
        <div className="col-1-of-3">col 1 of 3</div>
      </div>
    </section>
  );
};
