/*eslint-disable*/
import React from "react";
import {Link} from 'react-router-dom'
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>        
        <address className={classes.right}>
            Address: 2437 Fair Oaks Blvd, Sacramento, CA 95825. <br/>
            E-mail: <a href="mailto:support@cryptovip.org" rel="noopener noreferrer">support@cryptovip.org</a>
          </address>                 
      </div>
      <div className={classes.container}>
        <div className={classes.left}>
        <Link
                to="" rel="noopener noreferrer"
                className={classes.block}                
              >
                 &copy; {1900 + new Date().getYear()}  Crypto Vault Investment Platform
              </Link>
        </div>   
        <div className={classes.container}>
          <div className={classes.left}>
          <Link
                to="/privacypolicy" rel="noopener noreferrer"
                className={classes.block}
                target="_blank"
              >
                Privacy Policy
              </Link>
          </div>
        </div>     
      </div>      
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
