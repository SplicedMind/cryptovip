import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div id='about' className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>About</h2>                   
            <h5 className={classes.description} style={{color:"black"}}>
                Crypto Vault Investment is one of the leading global Cryptocurrency 
                focused investment platform. 
            </h5>
            <h5 className={classes.description} style={{color:"black"}}>
                Crypto Vault Investment applies professional investing and portfolio management; 
                exclusively for Cryptocurrency assets.
            </h5>
            <h5 className={classes.description} style={{color:"black"}}>
                Our management team has unparalleled experience in the block chain sector, 
                and offer a unique combination of hands-on understanding of the Cryptocurrency 
                market with seasoned financial expertise, to maximize return potential for our investors.
            </h5>
        </GridItem>
      </GridContainer>      
    </div> 
  );
}
