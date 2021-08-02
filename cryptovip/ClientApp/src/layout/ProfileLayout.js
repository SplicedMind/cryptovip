import React, {useState} from "react";
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
    const [open, setState] = useState(false); 
    const profile = JSON.parse(sessionStorage.user);
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
                                <div style={{width:'100%'}}>
                                    {profile && <>
                                    <div style={{float:'left'}}>
                                        <strong>{profile.lastName} {profile.firstName}</strong>                                        
                                    </div>

                                    <div style={{float:'right'}}>
                                    <div className="form-check form-check-inline">
                                            <input id="enabled" className="form-check-input" name="flexRadioDefault" type='radio' checked={profile.enabled} readOnly/>
                                            <label className="form-check-label" htmlFor="enabled" style={{color:"black"}}>{ profile.enabled ? profile.vipAccountNumber : "Account not verified"}</label>                                            
                                        </div>
                                    </div>
                                                                               
                                    </>}
                                </div>
                                <div className="list-group" style={{width:"100%", color:'purple'}}>                                    
                                    <Link to="/dashboard" style={{color:'purple'}} className="btn btn-sm list-group-item" role="button" aria-pressed="false">
                                        My E-Wallet
                                    </Link>
                                    <Link to="/dashboard/profile" style={{color:'purple'}} className="btn btn-sm list-group-item" role="button" aria-pressed="true">
                                        My Profile
                                    </Link>
                                    <Link to="/dashboard/addfunds" style={{color:'purple'}} className="btn btn-sm list-group-item" role="button" aria-pressed="true">
                                        Add Funds
                                    </Link>
                                    <Link to="/dashboard/withdrawfunds" style={{color:'purple'}} className="btn btn-sm list-group-item" role="button" aria-pressed="true">
                                        Withdraw Funds
                                    </Link>
                                    <Link to="/dashboard/transactions" style={{color:'purple'}} className="btn btn-sm list-group-item" role="button" aria-pressed="true">
                                        Transactions
                                    </Link>
                                    {
                                        profile?.xrtui && <Link to="/dashboard/admin" style={{color:'purple'}} className="btn btn-sm list-group-item" role="button" aria-pressed="true">
                                            Admin
                                        </Link> 
                                    }
                                                                   
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
