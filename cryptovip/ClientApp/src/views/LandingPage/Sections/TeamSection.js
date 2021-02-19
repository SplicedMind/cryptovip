import React from "react";
import {Link} from 'react-router-dom'
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import aelf from "assets/img/portfolio/aelf.jpeg";
import aragon from "assets/img/portfolio/aragon.png";
import bancor from "assets/img/portfolio/bancor.png";
import bat from "assets/img/portfolio/bat.png";
import blockchain from "assets/img/portfolio/blockchaincapital.png";
import blox from "assets/img/portfolio/blox.jpg";
import chronobank from "assets/img/portfolio/chronobank.png";
import civic from "assets/img/portfolio/civic.png";
import cosmos from "assets/img/portfolio/cosmos.png";
import elrond from "assets/img/portfolio/elrond.jpg";
import eos from "assets/img/portfolio/eos.png";
import ethereum from "assets/img/portfolio/ethereum.png";
import ethereumC from "assets/img/portfolio/ethereumC.png";
import eximchain from "assets/img/portfolio/eximchain.png";
import factom from "assets/img/portfolio/factom.png";
import fantom from "assets/img/portfolio/fantom.png";
import funfair from "assets/img/portfolio/funfair.gif";
import gnosis from "assets/img/portfolio/gnosis.png";
import golem from "assets/img/portfolio/golem.png";
import iconomi from "assets/img/portfolio/iconomi.png";
import iexec from "assets/img/portfolio/iexec.png";
import kyber from "assets/img/portfolio/kyber.png";
import matchpool from "assets/img/portfolio/matchpool.png";
import oasislabs from "assets/img/portfolio/oasislabs.jpg";
import omisego from "assets/img/portfolio/omisego.png";
import openanx from "assets/img/portfolio/openanx.png";
import republic from "assets/img/portfolio/republic.png";
import sentinel from "assets/img/portfolio/sentinel.jpg";
import saprow from "assets/img/portfolio/SparrowExchange.png";
import status from "assets/img/portfolio/status.png";
import storj from "assets/img/portfolio/storj.png";
import tenx from "assets/img/portfolio/tenx.png";
import tezos from "assets/img/portfolio/tezos.png";
import tierion from "assets/img/portfolio/tierion.png";
import token from "assets/img/portfolio/token.png";
import tomochain from "assets/img/portfolio/tomochain.jpg";
import waxtoken from "assets/img/portfolio/waxtoken.png";
import wetrust from "assets/img/portfolio/wetrust.png";
import zcash from "assets/img/portfolio/zcash.png";
import zilliqa from "assets/img/portfolio/zilliqa.png";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div id='portfolio' className={classes.section}>
      <h2 className={classes.title}>Our Portfolio</h2>
      <div>
        <GridContainer>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
            <Link target='_blank' to='https://aelf.io/'  rel="noopener noreferrer">
              <img src={aelf} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
            <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={aragon} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={bancor} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
          <Link target='_blank' to='#' rel="noopener noreferrer">
              <img src={bat} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={blockchain} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={blox} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={chronobank} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={civic} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={cosmos} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={elrond} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
          <Link target='_blank' to='#' rel="noopener noreferrer">
              <img src={eos} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={ethereum} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
          <Link target='_blank' to='#' rel="noopener noreferrer">
              <img src={ethereumC} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={eximchain} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={factom} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={fantom} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={funfair} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={gnosis} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={golem} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={iconomi} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={iexec} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={kyber} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={matchpool} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={oasislabs} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={omisego} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={openanx} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={republic} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={sentinel} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={saprow} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
          <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={status} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
            <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={storj} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
            <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={tenx} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
            <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={tezos} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
            <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={tierion} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
            <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={token} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
            <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={tomochain} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
            <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={waxtoken} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
            <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={wetrust} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
            <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={zcash} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={classes.itemGrid}>
            <Link target='_blank' to='#'  rel="noopener noreferrer">
              <img src={zilliqa} alt="..." className={imageClasses} />
            </Link>                
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
