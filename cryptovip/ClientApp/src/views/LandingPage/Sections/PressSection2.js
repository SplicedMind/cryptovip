import React from "react";
import {Link} from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import image2 from "assets/img/chart.jpg";
import image3 from "assets/img/refer.jpg";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import blockchain from "assets/img/press/blockchainnews.png";
import coindesk from "assets/img/press/coindesk.png";
import cointelegraph from "assets/img/press/cointelegraph.png";
import cryptoninjas from "assets/img/press/cryptoninjas.png";
import econotimes from "assets/img/press/econotimes.png";
import enterprisetimes from "assets/img/press/enterprisetimes.jpg";
import financemagnates from "assets/img/press/financemagnates.png";
import forbes from "assets/img/press/forbes.png";
import hedgeweek from "assets/img/press/hedgeweek.png";
import ibs from "assets/img/press/ibs.jpg";
import reuters from "assets/img/press/reuters.jpg";
import venturebeat from "assets/img/press/venturebeat.png";



const useStyles = makeStyles(styles);

export default function PressSection() {
  const classes = useStyles();
  
  return (
    <div style={{color:"black"}} className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={7}>
          <h3 className={classes.title}>Investor Get Paid First</h3>
            <ul className={classes.typo} style={{color:"black"}}>
              <li>We plan to pay our investors a return of 12.5% monthly for a year.</li>
              <li>Then we plan to reimburse their invested capital. Which can be withdrawn or re-invested.</li>
              <li>Only after the investors receive their monthly returns and their capital. We retain the 
                remaining profit for our professional effort.</li>              
            </ul>
        </GridItem>
        
        <GridItem xs={12} sm={12} md={4} style={{marginTop:"40px"}}>
          <img
            src={image3}
            alt="..."
            className={classes.imgRounded + " " + classes.imgFluid}
          />
          <h6 className={classes.description} style={{color:"black" }}>Refer Friends & 
            Associates! Earn Additional 1% Commission Monthly</h6>
        </GridItem>
      </GridContainer>
    </div>
  );
}
