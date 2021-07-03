import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Email from "@material-ui/icons/Email";
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

import image from "assets/img/bgl.jpg";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";

const useStyles = makeStyles(styles);

export default function LoginPage({form :{form, loading, formValid,  error, signup, onChange, onSubmit}}) {
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
     const [state, setState] = React.useState(false);

    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();

    const setOpen = () => {
        setState(!state);
    }

    
    return (
        <div>
            <Header
                absolute
                color="white"
                brand="Crypto-VIP"
                isOpen={state}
                setOpen={setOpen}
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
                    { 
                        signup && <SnackbarContent
                                    message={
                                        <span>
                                            <b>Success:</b> {
                                            ` Welcome ${signup.value.firstName}. Your account was successfully created.`
                                            }
                                        </span>
                                    }
                                    close
                                    color="success"
                                    icon="info_outline" 
                                />
                    }
                    {
                        error && <SnackbarContent
                                    message={
                                        <span>
                                            <b>ERROR:</b> {error}
                                        </span>
                                    }
                                    close
                                    color="danger"
                                    icon="info_outline"
                                />
                    }
                    {
                        form?.V && form?.Verified && <SnackbarContent
                        message={
                            <span>
                                <b>Success:</b> {
                                `${form.Verification}`
                                }
                            </span>
                        }
                        close
                        color="success"
                        icon="info_outline" 
                    />
                    }
                    {
                        form?.V && !form?.Verified && <SnackbarContent
                        message={
                            <span>
                                <b>ERROR:</b> {
                                `${form.Verification}`
                                }
                            </span>
                        }
                        close
                        color="danger"
                        icon="info_outline" 
                    />
                    }
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                            <Card className={classes[cardAnimaton]}>
                                <form className={classes.form}>
                                    <CardHeader color="primary" className={classes.cardHeader}>
                                        <h3>Login</h3>
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
                                            labelText="Email..."
                                            id="email"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "email",
                                                onChange: onChange,
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Email className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Password"
                                            id="password"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "password",
                                                onChange: onChange,
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Icon className={classes.inputIconsColor}>lock_outline</Icon>
                                                    </InputAdornment>
                                                ),
                                                autoComplete: "off"
                                            }}
                                        />
                                    </CardBody>
                                    <CardFooter className={classes.cardFooter}>
                                        <Button simple 
                                        disabled={loading || formValid}
                                        type="submit" 
                                        color="primary" 
                                        size="lg" 
                                        onClick={onSubmit}>
                                            Login
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
