import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";


const dashboardRoutes = [];

const useStyles = makeStyles(styles);


export default function LandingPage(props) {  
  const [state, setState] = React.useState(false);
  const classes = useStyles();
  
  const setOpen = ()=>{
    setState(!state);
  }

  const { ...rest } = props;
  return (
    <div>
      
      <Header
        color="white"
        routes={dashboardRoutes}
        brand={"Crypto-VIP"}
        rightLinks={<HeaderLinks setOpen={setOpen}/>}
        fixed
        isOpen={state}
        setOpen={setOpen}
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
    
        <div className={classNames(classes.main, classes.mainRaised)} style={{marginTop:"100px"}}>
            <div className={classes.container} style={{color:"black"}}>
                <h3 className={classes.title} style={{color:"black"}}>EWALLET TERMS OF USE</h3>
                <div>
                    <ol>
                        <li>
                            <h4 className={classes.title} style={{color:"black"}}>SUBJECT</h4>
                            <p>
                                These Terms of Use governs the opening, use of Your eWallet account 
                                provided to you to invest and withdraw Cryptocurrency.
                            </p>
                        </li>
                        <li>
                            <h4 className={classes.title} style={{color:"black"}}>E-WALLET ACCOUNT</h4>
                            <ol>
                                <li>
                                    EWALLET is an electronic facility which enables You to deposit and 
                                    withdraw Cryptocurrency and make electronic fund transfers.
                                </li>
                                <li>
                                    The funds reflected on the eWallet belongs to the person or legal entity, 
                                    which is registered as the investor. No person other than the investor has 
                                    any rights in relation to the funds held on an eWallet, except in cases of 
                                    succession. You may not assign or transfer Your eWallet to a third party or 
                                    otherwise grant any third party legal or equitable interest over it.
                                </li>
                                <li>
                                    Your eWallet is denominated in a Cryptocurrency of your choice, as selected by 
                                    You from the available Cryptocurrency.
                                </li>
                                <li>
                                    Your eWallet is provided with the multi-cryptocurrency facility, which offers the 
                                    possibility to keep funds in several Cryptocurrencies at the same time.
                                </li>
                                <li>
                                    You have the right to withdraw funds from your eWallet at any time. There is no 
                                    minimum withdrawal amount but the funds in your eWallet must be sufficient to 
                                    cover any applicable transfer fee.
                                </li>
                                <li>
                                    It is strictly forbidden to use your eWallet for any illegal purpose including but 
                                    not limited to fraud and money laundering.
                                </li>
                            </ol>
                        </li>
                        <li>
                            <h4 className={classes.title} style={{color:"black"}}>E-WALLET MAINTENANCE</h4>
                            <ol>
                                <li>
                                    You must ensure that the information recorded on your eWallet during the sign up process or any 
                                    time thereafter is always accurate and up to date. You shall notify us promptly but not later 
                                    than within one month, of any changes in such information and we shall not be liable for any loss 
                                    arising out of your failure to do so.
                                </li>
                                <li>
                                    Funds deposits and withdrawals are displayed in your online transaction history.
                                </li>
                                <li>
                                    Notices and any other communications will be transmitted to you electronically via registered email 
                                    to your registered email address. All communications so posted or sent shall be deemed transmitted 
                                    by the Company when sent and deemed delivered to you personally.
                                </li>
                            </ol>
                        </li>
                        <li>
                            <h4 className={classes.title} style={{color:"black"}}>KEEPING YOUR EWALLET SAFE</h4>
                            <ol>
                                <li>
                                    The registered email address and password are used to enter your eWallet. The PIN CODE is required to 
                                    confirm funds withdrawal from your eWallet. You must record the PIN CODE in a safe place. It will be 
                                    shown only once and won't be sent to your email. You must take all reasonable steps to keep your 
                                    registered email address, password, PIN code safe at all times and never disclose it to anyone.
                                </li>
                                <li>
                                    You must take all reasonable care to ensure that your registered email address is secure and only accessed 
                                    by you; as your registered email address can be used to reset other eWallet credentials. In case the 
                                    registered email address with your eWallet is compromised. You should without delay after becoming aware 
                                    of this contact us and also contact your registered email service provider.
                                </li>
                            </ol>
                        </li>
                    </ol>                    
                </div>
                <br/><br/>
            </div>
        </div>
        <Footer />
    </div>
    );
}