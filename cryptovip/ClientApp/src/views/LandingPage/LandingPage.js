import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import AboutSection from "./Sections/AboutSection.js";
import PressSection from "./Sections/PressSection.js";
import PortfolioSection from "./Sections/PortfolioSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);


export default function LandingPage(props) {  
  const [state, setState] = React.useState(false);
  const classes = useStyles();
  
  const setOpen = ()=>{
    setState(!state);
  }

  const { ...rest } = props;
  return (
    <div>
      
      <Header
        color="white"
        routes={dashboardRoutes}
        brand={"Crypto-VIP"}
        rightLinks={<HeaderLinks setOpen={setOpen}/>}
        fixed
        isOpen={state}
        setOpen={setOpen}
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      
      <Parallax filter image={require("assets/img/work.jpg")}>
        <div className={classes.container}>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Let your money work for you!</h1>
              <h4>
                Invest in the future of currency. Invest in Cryptocurrency.
              </h4>
              <br />
            </GridItem>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <PressSection />
          <AboutSection />
          <PortfolioSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
