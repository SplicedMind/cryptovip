import React from "react";
import { Link } from "react-router-dom";
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
import "bootstrap";

const useStyles = makeStyles(styles);

export default function PressSection() {
    const classes = useStyles();

    return (
        <div style={{ color: "black" }} >
            <GridContainer justify="center" className="d-flex align-items-center">
                <GridItem xs={12} sm={12} md={4} style={{ textAlign: "center" }}>
                    <img
                        src={image2}
                        alt="..."
                        className={classes.imgRounded + " " + classes.imgFluid}
                    />
                    <h6 className={classes.description} style={{ color: "black" }}>Invest Now! Start Earning 12.5% ROI Monthly</h6>
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                    <h3 className={classes.title}>How To Invest</h3>
                    <ul className={classes.typo} style={{ color: "black" }}>
                        <li>Get a Cryptocurrency wallet ( e.g visit <Link to="crypto.com" target="_blank">crypto.com</Link>)</li>
                        <li> Fund your Cryptocurrency wallet with BTC, ETH, USDT or LTC.</li>
                        <li>Sign up with Crypto Vault Investment.</li>
                        <li>Deposit your investment capital.</li>
                        <li>Withdraw your 12.5% ROI monthly.</li>
                    </ul>
                </GridItem>
            </GridContainer>
            <GridContainer justify="center" className="d-flex flex-row-reverse" style={{ marginTop: "50px" }}>
                <GridItem xs={12} sm={12} md={4} style={{ textAlign: "center" }} className="align-self-end">
                    <img
                        src={image3}
                        alt="..."
                        className={classes.imgRounded + " " + classes.imgFluid}
                    />
                    <h6 className={classes.description} style={{ color: "black" }}>Refer Friends &
              Associates! Earn Additional 1% Commission Monthly</h6>
                </GridItem>

                <GridItem xs={12} sm={12} md={8} className="align-self-start">
                    <h3 className={classes.title}>Investors Get Paid First</h3>
                    <ul className={classes.typo} style={{ color: "black" }}>
                        <li>We pay our investors a monthly return of 12.5% for a year.</li>
                        <li>Then we reimburse their invested capital. Which can be withdrawn or re-invested.</li>
                        <li>Only after our investors receive their monthly returns and their capital. We retain the
                  remaining profit for our professional effort.</li>
                    </ul>
                </GridItem>
            </GridContainer>
        </div>
    );
}
