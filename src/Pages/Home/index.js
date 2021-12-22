import React from "react";
import Style from "./Home.module.scss";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Home</title>
        <meta name="description" content="Home" />
        <meta name="theme-color" content="#E6E6FA" />
      </Helmet>
      <div className={Style.banner__wrapper}>
        <div className={Style.banner__container}>
          <div className={Style.banner__containerText}>
            <div className={Style.banner__mainText}>Main Banner</div>
            <div className={Style.banner__descText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum elementum nec eros eu faucibus.
            </div>
          </div>
          <div className={Style.banner__containerDate}>
            <div className={Style.banner__dateBox}>20.02.2022</div>
          </div>
        </div>
      </div>
      <div className={Style.lineUp__wrapper}>
        <div className={Style.lineUp__mainText}>Line Up</div>
        <div className={Style.lineUp__container}>
          <div className={Style.lineUp__containerItem}>
            <div className={Style.lineUp__item}></div>
            <div className={Style.lineUp__item}></div>
            <div className={Style.lineUp__item}></div>
            <div className={Style.lineUp__item}></div>
            <div className={Style.lineUp__item}></div>
            <div className={Style.lineUp__item}></div>
            <div className={Style.lineUp__item}></div>
            <div className={Style.lineUp__item}></div>
            <div className={Style.lineUp__item}></div>
            <div className={Style.lineUp__item}></div>
            <div className={Style.lineUp__item}></div>
            <div className={Style.lineUp__item}></div>
          </div>
        </div>
        <div className={Style.lineUp__cta}>
          <Link to="/line-up" className={Style.cta}>
            View More
          </Link>
        </div>
      </div>
      <div className={Style.sponsor__wrapper}>
        <div className={Style.sponsor__mainText}>Sponsors</div>
        <div className={Style.sponsor__container}>
          <div
            className={`${Style.sponsor__containerItem} ${Style.sponsor__containerItemGold}`}
          >
            <div className={Style.sponsor__item}></div>
            <div className={Style.sponsor__item}></div>
          </div>
          <div
            className={`${Style.sponsor__containerItem} ${Style.sponsor__containerItemSilver}`}
          >
            <div className={Style.sponsor__item}></div>
            <div className={Style.sponsor__item}></div>
            <div className={Style.sponsor__item}></div>
            <div className={Style.sponsor__item}></div>
          </div>
          <div
            className={`${Style.sponsor__containerItem} ${Style.sponsor__containerItemBronze}`}
          >
            <div className={Style.sponsor__item}></div>
            <div className={Style.sponsor__item}></div>
            <div className={Style.sponsor__item}></div>
            <div className={Style.sponsor__item}></div>
            <div className={Style.sponsor__item}></div>
            <div className={Style.sponsor__item}></div>
          </div>
        </div>
      </div>
      <div className={Style.mediaPartner__wrapper}>
        <div className={Style.mediaPartner__mainText}>Media Partner</div>
        <div className={Style.mediaPartner__container}>
          <div className={Style.mediaPartner__containerItem}>
            <div className={Style.mediaPartner__item}></div>
            <div className={Style.mediaPartner__item}></div>
            <div className={Style.mediaPartner__item}></div>
            <div className={Style.mediaPartner__item}></div>
            <div className={Style.mediaPartner__item}></div>
            <div className={Style.mediaPartner__item}></div>
          </div>
        </div>
      </div>
      <div className={Style.supportedBy__wrapper}>
        <div className={Style.supportedBy__mainText}>Supported By</div>
        <div className={Style.supportedBy__container}>
          <div className={Style.supportedBy__containerItem}>
            <div className={Style.supportedBy__item}></div>
            <div className={Style.supportedBy__item}></div>
            <div className={Style.supportedBy__item}></div>
            <div className={Style.supportedBy__item}></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
