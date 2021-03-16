import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
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

import image from "assets/img/bgl.jpg";
import axios from "components/AxiosInstance/AxiosInstance.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Check from "@material-ui/icons/Check";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    const [state, setState] = React.useState(false);
    const [error, setError] = React.useState({ message: "" });
    const [success, setSuccess] = React.useState({ message: "" });
    const [formData, setFormData] = React.useState({});

    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();

    const setOpen = () => {
        setState(!state);
    }

    const UpdateFormData = (e) => {
        switch (e.target.type) {
            case "email":
            case "password":
                formData[e.target.id] = e.target.value;
                break;
            case "checkbox":
                formData[e.target.id] = e.target.checked;
                break;
        }
        setFormData(formData);
    };


    // (            
    //   {
    //       method:'post',
    //       url:"user/login",
    //       headers:{
    //           'Content-Type': 'application/json'                             
    //       },
    //       data: JSON.stringify(formData)                                            
    //   })      
    const SubmitForm = (e) => {
        debugger;
        e.preventDefault();
        axios()
            .post("/user/login", formData)
            .then(
                (result) => {
                    debugger;
                    if (result.data.success) {
                        sessionStorage.setItem("user", JSON.stringify(result.data))
                        sessionStorage.setItem("token", result.data.token)
                        history.push("/profile-page");
                    }
                    else {
                        setError({ message: result.data.error });
                    }

                })
            .catch((err) => {
                debugger
                setError({ message: err });
            })
    }

    const history = useHistory();

    let errorNotify = null;
    let successNotify = null;
    if (error.message !== "") {
        errorNotify = (<SnackbarContent
            message={
                <span>
                    <b>ERROR:</b> {error.message}
                </span>
            }
            close
            color="danger"
            icon="info_outline"
        />);
    }

    const { ...rest } = props;
    return (
        <div>
            <Header
                absolute
                color="white"
                brand="Crypto-VIP"
                isOpen={state}
                setOpen={setOpen}
                rightLinks={<HeaderLinks />}
                {...rest}
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
                    {errorNotify}
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
                                                onChange: UpdateFormData,
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
                                                onChange: UpdateFormData,
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
                                        <Button simple type="submit" color="primary" size="lg" onClick={SubmitForm}>
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
