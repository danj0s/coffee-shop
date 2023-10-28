import React, { Fragment } from "react";
import MainBlock from "./blocks/MainBlock";
import AboutUsBlock from "./blocks/AboutsUsBlock";
import OurBestBlock from "./blocks/OurBestBlock";
import Footer from "../../blocks/Footer";

const CoffeHousePage = ({ setPage }) => {
  return (
    <Fragment>
      <MainBlock setPage={setPage} />
      <AboutUsBlock />
      <OurBestBlock />
      <Footer />
    </Fragment>
  );
};

export default CoffeHousePage;
