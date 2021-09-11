/*eslint-disable*/
import React from "react";
import { Link } from 'react-router-dom'
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
                <div className={classes.left, classes.block}>
                    <address>Address: 2437 Fair Oaks Blvd, Sacramento, CA 95825.</address>
                    <div>
                        E-mail: <a href="mailto:support@cryptovip.org" rel="noopener noreferrer" style={{ textTransform: "lowercase" }}>support@cryptovip.org</a>
                    </div>
                </div>
            </div>
            <div className={classes.container}>

                <div className={classes.right, classes.block} >
                    <Link to="" rel="noopener noreferrer" style={{ color: "black" }}>
                        &copy; {1900 + new Date().getYear()}  Crypto Vault Investment Platform
                    </Link>
                </div>

                <div>
                    Telephone: <a href="tel:+2135599409" rel="noopener noreferrer">(+213)559-9409</a>
                </div>
            </div>


            <div className={classes.container}>
                <Link
                    to="/privacypolicy" rel="noopener noreferrer"
                    className={classes.block}
                    target="_blank"
                >
                    Privacy Policy
                </Link>
            </div>

            
        </footer>
    );
}

Footer.propTypes = {
    whiteFont: PropTypes.bool
};
