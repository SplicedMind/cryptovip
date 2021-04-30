import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import { Link } from 'react-router-dom';
import image from "assets/img/bgl.jpg";
import SnackbarContent from "components/Snackbar/SnackbarContent";

const useStyles = makeStyles(styles);

const SignUpPage = ({form:{onChange, form, formValid, onSubmit, loading, fieldErrors, data}})  =>{
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();

    return (
        <div>
            <Header
                absolute
                color="white"
                brand="Crypto-VIP"
                // isOpen={open}
                // setOpen={setopen}
                rightLinks={<HeaderLinks />}
                //{...rest}
            />
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <div className={classes.container}>
                {fieldErrors.err && <SnackbarContent
                        message={
                            <span>
                                <b>ERROR:</b> {fieldErrors.err}
                            </span>
                        }
                        close
                        color="danger"
                        icon="info_outline"
                    />}
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                            <Card className={classes[cardAnimaton]}>
                                <form className={classes.form}>
                                    <CardHeader color="primary" className={classes.cardHeader}>
                                        <h3>Sign-Up</h3>
                                        <div className={classes.socialLine}>
                                            <Button
                                                justIcon
                                                href="#pablo"
                                                target="_blank"
                                                color="transparent"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className={"fab fa-twitter"} />
                                            </Button>
                                            <Button
                                                justIcon
                                                href="#pablo"
                                                target="_blank"
                                                color="transparent"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className={"fab fa-facebook"} />
                                            </Button>
                                            <Button
                                                justIcon
                                                href="#pablo"
                                                target="_blank"
                                                color="transparent"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className={"fab fa-google-plus-g"} />
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <p className={classes.divider}>Or Be Classical</p>
                                    <CardBody>
                                        <CustomInput
                                            labelText="First Name"
                                            id="firstName"
                                            name="firstname"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "text",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <People className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                ),
                                                required: true,                                                
                                                onChange: onChange,
                                                value: form.firstName || ""
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Last Name"
                                            id="lastName"
                                            name="lastName"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "text",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <People className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                ),
                                                required: true,
                                                onChange: onChange,
                                                value: form.lastName || ""
                                            }}
                                        />
                                        <CustomInput
                                            labelText="E-mail"
                                            id="email"
                                            name="email"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "email",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Email className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                ),
                                                required: true,
                                                onChange: onChange,
                                                value: form.email || ""
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Password"
                                            id="password"
                                            name="password"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "password",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Icon className={classes.inputIconsColor}>
                                                            lock_outline
                                                        </Icon>
                                                    </InputAdornment>
                                                ),
                                                autoComplete: "off",
                                                required: true,
                                                onChange: onChange,
                                                value: form.password ||""
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Re-Type Password"
                                            id="repassword"
                                            name="repassword"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "password",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Icon className={classes.inputIconsColor}>
                                                            lock_outline
                                                        </Icon>
                                                    </InputAdornment>
                                                ),
                                                autoComplete: "off",
                                                required: true,
                                                onChange: onChange,
                                                value: form.repassword || ""
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Referral E-mail"
                                            id="referralusername"
                                            name="referralusername"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "email",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <People className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                ),
                                                onChange: onChange,
                                                value: form.referralusername || ""
                                            }}
                                        />
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" name="terms" id="terms" type="checkbox" required onChange={onChange} value={form.terms}/>  
                                            <label className="form-check-label">
                                                <small>I accept Crypto Vault Investment
                                                    <Link to="/termsconditions" rel="noopener noreferrer" target="_blank" style={{ marginLeft: "2px" }}>
                                                        Terms & Conditions
                                                    </Link>
                                                </small>
                                            </label>                                            
                                        </div>
                                    </CardBody>
                                    <CardFooter className={classes.cardFooter}>
                                        <Button 
                                            disabled={formValid || loading} 
                                            loading ={loading}
                                            type="submit"                                             
                                            simple color="primary" 
                                            size="lg" 
                                            onClick={onSubmit} >
                                            Signup                                           
                                        </Button>
                                    </CardFooter>
                                </form>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
                <Footer whiteFont />
            </div>
        </div>
    );
}

export default SignUpPage
