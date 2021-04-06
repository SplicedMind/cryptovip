import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import Button from "components/CustomButtons/Button.js";
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function ProfileLayout(props) {
    const classes = useStyles();
    const [open, setState] = React.useState(false);   
    const setOpen = () => {
        setState(!open);
    }
    
    return (
        <div>
            <Header
                absolute
                color="white"
                brand="Crypto-VIP"
                isOpen={open}
                setOpen={setOpen}
                rightLinks={<HeaderLinks />}
            />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className="mx-4" style={{marginTop:150}}>
                    
                    <div className="row">
                        <div className="col-md-3 my-4">
                            <div className="row">
                                <div className="list-group" style={{width:"100%"}}>
                                    <Link to="/profile/dashboard" className="btn btn-sm list-group-item" role="button" aria-pressed="false">
                                        Dashboard
                                    </Link>
                                    <Link to="/profile/addfunds" className="btn btn-sm list-group-item" role="button" aria-pressed="true">
                                        Add Funds
                                    </Link>
                                    <Link to="/profile/withdrawfunds" className="btn btn-sm list-group-item" role="button" aria-pressed="true">
                                        Withdraw Funds
                                    </Link>
                                    <Link to="/profile/transactions" className="btn btn-sm list-group-item" role="button" aria-pressed="true">
                                        Transactions
                                    </Link>                                
                                </div>
                            </div>                            
                        </div>
                        <div className="col-md-9">
                            {props.children}
                        </div>
                    </div>                   
                </div>
            </div>
            <Footer />
        </div>
    );
}
