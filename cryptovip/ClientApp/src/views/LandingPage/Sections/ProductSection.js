import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import "bootstrap";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div id='' className={classes.section}>
      <GridContainer justify="center" className="d-flex">
        <GridItem xs={12} sm={12} md={8}>
          <h3 className={classes.title}>Why Invest In Crypto Funds</h3>
         
          <div className={classes.description} style={{color:"black"}}>
              <h5>
              Cryptocurrency funds are a new breed of Investment funds that have emerged in the last few years 
              to capitalize on the opportunity that digital currencies and tokens provide to financial investors.
              The Cryptocurrency market is still at its very early stages. Certainly, Cryptocurrencies are not 
              going away, they will form part of the financial landscape for decades to come.            
            </h5>
              <i>
                The future of money is digital currency
              </i><br/>
              <span>Bill Gates</span>
                              
              <h5>
                Crypto Vault Investment platform give you a better chance to diversify and thus own some of the winners
                 in the blockchain space.
              </h5>
            </div>
          {/* <h5 className={classes.description}>
          Crypto Vault Investment is one of the leading global Cryptocurrency 
          focused investment platform; based in California. Crypto Vault 
          Investment applies professional investing and portfolio management; 
          exclusively for Cryptocurrency assets.
          </h5> */}
        </GridItem>
      </GridContainer>      
    </div> 
  );
}
