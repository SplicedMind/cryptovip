import React from "react";
import {Link} from 'react-router-dom'
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import btc from "assets/img/portfolio/bitcoin.png";
import dash from "assets/img/portfolio/dash.png";
import eth from "assets/img/portfolio/ethereum.png";
import ltc from "assets/img/portfolio/litecoin.jpg";
import loom from "assets/img/portfolio/loom.png";
import omg from "assets/img/portfolio/omg.png";
import data from "assets/img/portfolio/data.png";
import eos from "assets/img/portfolio/eos.png";
import thet from "assets/img/portfolio/theta.jpg";
import usdt from "assets/img/portfolio/usdt.png";
import ripple from "assets/img/portfolio/ripple.png";
import btg from "assets/img/portfolio/btg.png";
import trx from "assets/img/portfolio/trx.png";
import adx from "assets/img/portfolio/adx.png";
import neo from "assets/img/portfolio/neo.png";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRounded,
    classes.imgFluid,
    classes.imgRaised
  );
  const imgMargin = {
    MarginTop : "5px",
    MarginBottom: "5px"
  }
  return (
    <div id='portfolio' className={classes.section}>
      <h2 className={classes.title}>Portfolio</h2>
      <div>
        <GridContainer justify="center">
          <GridItem xs={6} sm={6} md={3} >
            <Link target='_blank' to='https://aelf.io/'  rel="noopener noreferrer">
              <img src={btc} alt="..." className={imageClasses} style={{marginTop:"7px"}} />
            </Link>                
          </GridItem>
          <GridItem xs={6} sm={6} md={3} >
            <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={dash} alt="..." className={imageClasses} style={{marginTop:"7px"}}/>
            </Link>                
          </GridItem>
          <GridItem xs={6} sm={6} md={3} >
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={eth} alt="..." className={imageClasses} style={{marginTop:"7px"}}/>
            </Link>                
          </GridItem>
          <GridItem xs={6} sm={6} md={3} >
          <Link target='_blank' to='#' rel="noopener noreferrer">
              <img src={ltc} alt="..." className={imageClasses} style={{marginTop:"7px"}}/>
            </Link>                
          </GridItem>
          <GridItem xs={6} sm={6} md={3} >
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={omg} alt="..." className={imageClasses} style={{marginTop:"7px"}}/>
            </Link>                
          </GridItem>
          <GridItem xs={6} sm={6} md={3} >
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={loom} alt="..." className={imageClasses} style={{marginTop:"7px"}}/>
            </Link>                
          </GridItem>
          <GridItem xs={6} sm={6} md={3} >
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={usdt} alt="..." className={imageClasses} style={{marginTop:"7px"}}/>
            </Link>                
          </GridItem>
          <GridItem xs={6} sm={6} md={3} >
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={btg} alt="..." className={imageClasses} style={{marginTop:"7px"}}/>
            </Link>                
          </GridItem>
          <GridItem xs={6} sm={6} md={3} >
          <Link target='_blank' to='#'  rel="noopener noreferrer">
          <img src={trx} alt="..." className={imageClasses} style={{marginTop:"7px"}}/>
            </Link>                
          </GridItem>
          <GridItem xs={6} sm={6} md={3} >
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={ripple} alt="..." className={imageClasses} style={{marginTop:"7px"}}/>
            </Link>                
          </GridItem>
          <GridItem xs={6} sm={6} md={3} >
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={adx} alt="..." className={imageClasses} style={{marginTop:"7px"}}/>
            </Link>                
          </GridItem>
          <GridItem xs={6} sm={6} md={3} >
          <Link target='_blank' to='#'  rel="noopener noreferrer">
          <img src={thet} alt="..." className={imageClasses} style={{marginTop:"7px"}}/>
            </Link>                
          </GridItem>
          
          <GridItem xs={6} sm={6} md={3} >
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={data} alt="..." className={imageClasses} style={{ marginTop:"7px"}}/>
            </Link>                
          </GridItem>
          <GridItem xs={6} sm={6} md={3} >
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={neo} alt="..." className={imageClasses} style={{ marginTop:"7px"}}/>
            </Link>                
          </GridItem>
          <GridItem xs={6} sm={6} md={3} >
          <Link target='_blank' to='#'  rel="noopener noreferrer">
          <img src={eos} alt="..." className={imageClasses + " my-1"} style={{marginTop:"7px"}}/>
            </Link>                
          </GridItem>

        </GridContainer>
      </div>
    </div>
  );
}
