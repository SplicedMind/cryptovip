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

    const setOpen = () => {
        setState(!state);
    }

    const { ...rest } = props;
    return (
        <div>

            <Header
                color="white"
                routes={dashboardRoutes}
                brand={"Crypto-VIP"}
                rightLinks={<HeaderLinks setOpen={setOpen} />}
                fixed
                isOpen={state}
                setOpen={setOpen}
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />

            <div className={classNames(classes.main, classes.mainRaised)} style={{ marginTop: "100px" }}>
                <div className={classes.container} style={{ color: "black" }}>
                    <h3 className={classes.title} style={{ color: "black" }}>E-WALLET TERMS OF USE</h3>
                    <div>
                        <ol>
                            <li>
                                <h4 className={classes.title} style={{ color: "black" }}>SUBJECT</h4>
                                <p>
                                    These Terms of Use governs the opening, use of Your e-Wallet account
                                    provided to you to invest and withdraw Cryptocurrency.
                            </p>
                            </li>
                            <li>
                                <h4 className={classes.title} style={{ color: "black" }}>E-WALLET ACCOUNT</h4>
                                <ol>
                                    <li>
                                        E-WALLET is an electronic facility which enables You to deposit and
                                        withdraw Cryptocurrency and make electronic fund transfers.
                                </li>
                                    <li>
                                        The funds reflected on the e-Wallet belongs to the person or legal entity,
                                        which is registered as the investor. No person other than the investor has
                                        any rights in relation to the funds held on an e-Wallet, except in cases of
                                        succession. You may not assign or transfer Your e-Wallet to a third party or
                                        otherwise grant any third party legal or equitable interest over it.
                                </li>
                                    <li>
                                        Your e-Wallet is denominated in a Cryptocurrency of your choice, as selected by
                                        You from the available Cryptocurrency.
                                </li>
                                    <li>
                                        Your e-Wallet is provided with the multi-cryptocurrency facility, which offers the
                                        possibility to keep funds in several Cryptocurrencies at the same time.
                                </li>
                                    <li>
                                        You have the right to withdraw funds from your e-Wallet at any time. There is no
                                        minimum withdrawal amount but the funds in your e-Wallet must be sufficient to
                                        cover any applicable transfer fee.
                                </li>
                                    <li>
                                        It is strictly forbidden to use your e-Wallet for any illegal purpose including but
                                        not limited to fraud and money laundering.
                                </li>
                                </ol>
                            </li>
                            <li>
                                <h4 className={classes.title} style={{ color: "black" }}>E-WALLET MAINTENANCE</h4>
                                <ol>
                                    <li>
                                        You must ensure that the information recorded on your e-Wallet during the sign up process or any
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
                                <h4 className={classes.title} style={{ color: "black" }}>KEEPING YOUR E-WALLET SAFE</h4>
                                <ol>
                                    <li>
                                        The registered email address and password are used to enter your e-Wallet. The PIN CODE is required to
                                        confirm funds withdrawal from your e-Wallet. You must record the PIN CODE in a safe place. It will be
                                        shown only once and won't be sent to your email. You must take all reasonable steps to keep your
                                        registered email address, password, PIN code safe at all times and never disclose it to anyone.
                                    </li>
                                    <li>
                                        You must take all reasonable care to ensure that your registered email address is secure and only accessed
                                        by you; as your registered email address can be used to reset other e-Wallet credentials. In case the
                                        registered email address with your e-Wallet is compromised. You should without delay after becoming aware
                                        of this contact us and also contact your registered email service provider.
                                    </li>
                                    <li>
                                        If you have any indication or suspicion that your e-Wallet credentials is being lost, stolen, misappropriated,
                                        used without authorization or otherwise compromised. You are strongly advised to change your password. You must
                                        contact us without undue delay. Regardless of your notification, you shall be liable for any losses as a result
                                        and you agree to indemnify and hold the Company, its affiliates, employees, successors and assign harmless from
                                        and against any and all liabilities, losses, cost and expenses, including attorney's fees, incurred by us arising
                                        out of your failure to fully and timely perform your obligation.
                                    </li>
                                    <li>
                                        Irrespective of whether you are using a public, a shared or your own computer to access your e-Wallet. You must
                                        always ensure that your login details are not stored by the browser or cached or otherwise recorded. You should '
                                        never use any functionality that allow login details or password to be stored by the computer you are using.
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <h4 className={classes.title} style={{ color: "black" }}>DEPOSITING FUNDS</h4>
                                <ol>
                                    <li>
                                        You can deposit funds by visiting our website, logging into your e-Wallet and following the relevant deposit instructions.
                                    </li>
                                    <li>
                                        You may be presented with a number of different depositing options; depending on which payment instrument you choose and
                                        which payment option is available. We shall not be responsible for the deposit payment until the funds are received by us.
                                    </li>
                                    <li>
                                        To deposit funds you are required to authorize the transfer with your login details and password and PIN code.
                                    </li>
                                    <li>
                                        Deposited funds will be credited to your e-Wallet after funds have been received by us. Before we receive the funds, the transaction is assigned "Pending" status.
                                    </li>
                                    <li>
                                        Deposit may be subject to transfer fee depending on which deposit option and transfer protocol is chosen. Such fee will be deducted from your deposit.
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <h4 className={classes.title} style={{ color: "black" }}>WITHDRAWING FUNDS</h4>
                                <ol>
                                    <li>
                                        You can request a withdrawal of all or part of your return on investment (ROI) at anytime; by following the instructions specified on the website.
                                    </li>
                                    <li>
                                        The withdrawal cryptocurrency depends on the payment option that you choose. In case the Cryptocurrency of withdrawal does not correspond the
                                        Cryptocurrency of your e-Wallet pocket, the will be converted at an indicated currency exchange rate.
                                    </li>
                                    <li>
                                        To withdraw your fund, you are required to authorize the transfer with your login details, password and PIN.
                                    </li>
                                    <li>
                                        Withdrawals may be subject to transfer fee depending on which withdrawal option and transfer protocol is chosen. Such fee is deducted from your withdrawal amount.
                                    </li>
                                    <li>
                                        Withdrawal can only be made back to the wallet you used in depositing fund.
                                    </li>
                                    <li>
                                        Your capital will be released for withdrawal after a year. You can decide to re-invest or withdraw your capital.
                                    </li>
                                    <li>
                                        You must ensure that the payment details you enter when withdrawing funds are correct and complete. We will not
                                        be liable for withdrawn funds being sent to a wrong wallet where this is due to you providing incorrect paying details.
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <h4 className={classes.title} style={{ color: "black" }}>LIABILITY</h4>
                                <ol>
                                    <li>
                                        <h6 className={classes.title} style={{ color: "black" }}>
                                            In case of an unauthorized transfer or a transfer that was incorrectly executed due to an error by us, we shall at
                                            your request immediately refund the payment amount including all fees deducted therefrom. This shall not apply
                                        </h6>
                                        <ol>
                                            <li>
                                                where the unauthorized payment arises from your failure to keep the e-Wallet credentials safe. In this case you shall remain solely liable for all losses.
                                             </li>
                                            <li>
                                                if you fail to dispute and bring the unauthorized or incorrectly executed transaction to our attention within one month from the date of the transaction.
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <h6 className={classes.title} style={{ color: "black" }}>
                                            Without prejudice to any other terms of this Terms of Use relating to the limitation of liability and provision of indemnities, the following 
                                            shall apply in particular to provision of services under this Terms of Use.
                                        </h6>
                                        <ol>
                                            <li>
                                                System errors: The Company shall have no liability to the investor for any partial or non performance of its obligations hereunder by reason of any 
                                                cause beyond its reasonable control, for damage which the Company may suffer as a result of malfunction or failure of transmission, communication or 
                                                computer facilities, or any technical faults, illegal intervention in network equipment, network overloads, malicious blocking of access by third 
                                                parties, interruptions, the failure by the relevant intermediate service provider to perform its obligations.
                                            </li>
                                            <li>
                                                Viruses: The Company shall have no liability to the investor ( whether in contract or in tort, including negligence) in the event that any viruses, 
                                                worms, software bomb or similar malicious code items are introduced into the investor's information system via the e-Wallet, provided that the company 
                                                has taken reasonable steps to prevent any such introduction.
                                            </li>
                                            <li>
                                                Unauthorized use: The Company shall not be liable for any loss, liability or cost whatsoever arising from any unauthorized use of the investor's 
                                                credentials. Without derogating from generality of indemnification provision under the Terms of Use, the investor shall indemnify, protect and hold 
                                                the Company, its owners, subsidiaries, affiliates, employees, management harmless from and against all losses, liabilities, action, judgements, claims, 
                                                resulting from and arising out of any act or omission by any person using the e-Wallet or any designated password or other authentication details 
                                                provided by the company to to the investor, whether or not the investor actually authorize such use.
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        The Company shall not be liable for non performance of its obligations hereunder due to any event beyond its reasonable control, including without limitation 
                                        any industrial action, act of terrorism, act of God, acts and regulations of any governmental or supranational bodies, for any reason, to perform its obligations.
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <h4 className={classes.title} style={{ color: "black" }}>REFUND POLICY</h4>
                                <ol>
                                    <li>
                                        Due to the nature of business no refunds are provided by the company. The only exception is made if you are not an investor i.e you do not sign up with the company. 
                                        In this case the company will refund money received from you using the same method originally used by you. All investors capital will automatically be released 
                                        after a year for withdrawal.
                                    </li>
                                </ol>
                            </li>

                            <p>
                                THIS IS A LEGALLY BINDING TERMS OF USE. YOU HAVE TO CAREFULLY READ ALL OF THE FOREGOING COMPLETELY AND COMPLETE THE INVESTOR APPLICATION TO OPEN AN E-WALLET.
                            </p>
                        </ol>
                    </div>
                    <br /><br />
                </div>
            </div>
            <Footer />
        </div>
    );
}