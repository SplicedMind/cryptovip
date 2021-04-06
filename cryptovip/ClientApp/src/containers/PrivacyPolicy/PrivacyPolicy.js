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
                    <h2 className={classes.title} style={{ color: "black" }}>PRIVACY POLICY</h2>
                    <div>
                        <p className={classes.description} >
                            Thank you for accessing our website.  We respect your privacy and want to
                            protect your personal information. To learn more, please read this Privacy Policy.
                        </p>

                        <p>
                            This Privacy Policy explains how we collect, use and (under certain conditions)
                            disclose your personal information. This Privacy Policy also explains the steps we
                            have taken to secure your personal information. Finally, this Privacy Policy explains
                            your options regarding the collection, use and disclosure of your personal information.
                            By visiting the Site directly or through another site, you accept the practices
                            described in this Policy.
                        </p>

                        <p>
                            This privacy policy applies to the Site. This privacy policy does not necessarily
                            apply to any offline collection of your personal information. Please see below for details.
                        </p>

                        <p>
                            We are not responsible for the content or privacy practices on any web site not operated
                            by us to which the Site links or that links to the Site.
                        </p>

                        <h4 className={classes.title} style={{ color: "black" }}>INFORMATION COLLECTION AND USE</h4>
                        <p>
                            Some features of our website ask you to provide us with specific categories of information in
                            order to enjoy complete functionality. If you do not provide us with the categories of information
                            requested, your ability to fully interact with the website may be limited. The features requiring
                            you to provide information to us are described in detail below:
                        </p>

                        <h6 className={classes.title} style={{ color: "black" }}>Inquiries</h6>
                        <p>
                            In order to submit inquiries through our website, you must provide certain information. The “Contact Us,”
                            “Send Information,” or other similar forms require you to provide your name and email address. This
                            information is required so that you can be contacted about your request. Some forms may also require
                            you to provide us with your address or telephone number.
                        </p>

                        <h6 className={classes.title} style={{ color: "black" }}>Tracking Technologies</h6>
                        <p>
                            We use cookies and other tracking technologies to personalize your experience, analyze user trends,
                            and improve our website. These tracking technologies allow us to collect information such as your
                            device type, browser type, time spent on our websites, pages visited, geographic location, and other
                            data. You can alter the configuration of your browser to refuse to accept cookies, but it is possible
                            that doing so may cause limited functionality of the website. For example, we may not be able to
                            recognize your computer or device, and you may need to log in every time you visit.
                        </p>

                        <h6 className={classes.title} style={{ color: "black" }}>Do Not Track</h6>
                        <p>
                            The website does not respond to “Do Not Track” signals at this time.
                        </p>

                        <h6 className={classes.title} style={{ color: "black" }}>Information Collected From Third Parties</h6>
                        <p>
                            We also obtain information about the traffic and usage of the website from third parties, including Google
                            and other providers. These third parties also use cookies and other tracking technologies to capture information
                            about your interactions with our website. We do not have control over the information that is collected, used,
                            and shared by these third parties. We encourage you to review the privacy statements of these third parties
                            to understand their privacy practices.
                        </p>

                        <h6 className={classes.title} style={{ color: "black" }}>Information Sharing</h6>
                        <p>
                            When you complete the “Contact Us,” “Request Information” or similar forms, we share this information with
                            our contracted sales agents so they can contact you about your request and provide you with information about
                            services and products that may meet your needs.
                        </p>

                        <h6 className={classes.title} style={{ color: "black" }}>Third Party Links</h6>
                        <p>
                            The website contains links to other websites such as social media platforms. These websites are not covered
                            by our Privacy Statement. Please review the Privacy Statements of these websites in order to understand the
                            privacy practices of these third parties.
                        </p>

                        <h6 className={classes.title} style={{ color: "black" }}>Cookies and Other Technology</h6>
                        <p>
                            Like many sites, the Site employs cookies and web beacons (also known as clear GIF technology or “action tags”)
                            to speed your navigation of the Site, recognize you and your access privileges, and track your Site usage.
                            <ol type="i">
                                <li>
                                    Cookies are small pieces of information that are stored as text files by your Internet browser on your
                                    computer’s hard drive. Most Internet browsers are initially set to accept cookies. You can set your
                                    browser to refuse cookies from web sites or to remove cookies from your hard drive, but if you do, you
                                    will not be able to access or use portions of the Site. THE SITE’S COOKIES DO NOT AND CANNOT INFILTRATE
                                    A USER’S HARD DRIVE TO GATHER A USER’S CONFIDENTIAL INFORMATION. Our cookies are not “spyware.”
                                </li>
                                <li>
                                    Web beacons assist in delivering cookies and help us determine whether a web page on the Site has been
                                    viewed and, if so, how many times. For example, any electronic image on the Site, such as an ad banner,
                                    can function as a web beacon.
                                </li>
                                <li>
                                    We may use third-party advertising companies to help tailor site content to users or to serve ads on our
                                    behalf. These companies may employ cookies and web beacons to measure advertising effectiveness (such as
                                    which web pages are visited). Any information that these third parties collect via cookies and web beacons
                                    is not linked to any personal information collected by us.
                                </li>
                                <li>
                                    Log Files. As is true of most web sites, the Site server automatically recognizes the Internet URL from which
                                    you access the Site. We may also log your Internet protocol (“IP”) address, Internet service provider, and
                                    date/time stamp for system administration, order verification, internal marketing, and system troubleshooting
                                    purposes. (An IP address may indicate the location of your computer on the Internet).
                                </li>
                            </ol>
                        </p>

                        <h6 className={classes.title} style={{ color: "black" }}>Communications with You</h6>
                        <p>
                            We will use your personal information to communicate with you about the Site and your inquiries.  Also, we may send you
                            updates, literature, and emails about our services. We always permit you to unsubscribe or opt out of future emails.
                        </p>

                        <h6 className={classes.title} style={{ color: "black" }}>External Use</h6>
                        <p>
                            We do not sell, rent, trade, license or otherwise disclose your specific personal information or financial information to
                            anyone other than to affiliates under our control, except that:
                        <ol>
                                <li>
                                    As do most sites, we sometimes use others to perform specific functions on our behalf. When we disclose information
                                    to these service providers, we disclose information to help them to perform their service. For example, in order to
                                    deliver products to you, we must share some information. We partner with third parties (such as the U.S. Postal Service,
                                    United Parcel Service, and Federal Express) to ship information, to ensure delivery, and so that we can obtain feedback,
                                    improve the quality of our service, and measure and improve the quality of the service of the third party. In the example
                                    of shippers, we provide them some personally identifiable information such as your name, shipping address, email, and phone number.
                        </li>
                                <li>
                                    We will not sell (or trade or rent) personally identifiable information to other companies as part of our regular course
                                    of business. However, it’s possible that we might acquire or merge with or be acquired by another company or that we might
                                    dispose of some or all of our assets. If that happens, your personal information may be disclosed to another company, but
                                    that disclosure will be subject to the Privacy Policy in effect.
                        </li>
                            </ol>
                        </p>

                        <h6 className={classes.title} style={{ color: "black" }}>Other</h6>
                        <p>
                            Aside from the instances described above, we will only share your personal information: to comply with the law; to respond to claims;
                            to comply with legal process served on us (e.g., a lawful subpoena, warrant, or court order); to enforce or apply our policies or
                            agreements; (including to bill and collect payments); to protect and defend our rights or property or that of our customers, employees,
                            visitors, or the public; in connection with a business transfer, sale, liquidation, or merger; and if we reasonably believe that an
                            emergency involving immediate danger of death or serious physical injury to any person requires disclosure.
                        </p>

                        <h6 className={classes.title} style={{ color: "black" }}>Security</h6>
                        <p>
                            We use commercially reasonable administrative, technical, and physical safeguards to protect personal information collected through the website.
                        </p>
                        <p>
                            We retain the information we collect for as long as reasonably necessary to provide services and fulfill the purposes described in this Privacy Statement.
                        </p>

                        <h6 className={classes.title} style={{ color: "black" }}>Contact Us</h6>
                        <p>
                            If you have comments, questions, or concerns about this Privacy Statement or about our collection, use, or disclosure of your personal information,
                            or if you would like to make a request to review or update your personal information, please contact us through any of the methods listed on our Contact Page.
                        </p>
                        <br /><br />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
