import React from "react";
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

import axios from "components/AxiosInstance/AxiosInstance.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Check from "@material-ui/icons/Check";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = React.useState({});
    const [error, setError] = React.useState({ message: "" });
    const [success, setSuccess] = React.useState({ message: "" });
    const [disabled, setDisabled] = React.useState({ disabled: true });

    const classes = useStyles();
    const setopen = () => {
        setOpen(!open);
    }
    const { ...rest } = props;

    const UpdateFormData = (e) => {
        switch (e.target.type) {
            case "text":
            case "email":
            case "password":
                formData[e.target.id] = e.target.value;
                break;
            case "checkbox":
                formData[e.target.id] = e.target.checked;
                setDisabled({ disabled: !e.target.checked });
                break;
        }
        setFormData(formData);
    };

    const SubmitForm = (e) => {
        e.preventDefault();
        axios().post("/user/signup", formData)
            .then((res) => {
                console.log(res);
                setSuccess({ message: "" });
            })
            .catch((err) => {
                console.log(err);
                setError({ message: err });
            })
            ;
    }

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

    if (success.message !== "") {
        successNotify = (<SnackbarContent
            message={
                <span>
                    <b>SUCCESS:</b> {success.message}
                </span>
            }
            close
            color="success"
            icon={Check}
        />);
    }

    return (
        <div>
            <Header
                absolute
                color="white"
                brand="Crypto-VIP"
                isOpen={open}
                setOpen={setopen}
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
                    {errorNotify}{successNotify}
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
                                            labelText="First Name..."
                                            id="firstName"

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
                                                onChange: UpdateFormData,
                                                value: formData["firstName"]
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Last Name..."
                                            id="lastName"
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
                                                onChange: UpdateFormData,
                                                value: formData["lastName"]
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Email..."
                                            id="email"
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
                                                onChange: UpdateFormData,
                                                value: formData["email"]
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
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Icon className={classes.inputIconsColor}>
                                                            lock_outline
                                                        </Icon>
                                                    </InputAdornment>
                                                ),
                                                autoComplete: "off",
                                                required: true,
                                                onChange: UpdateFormData,
                                                value: formData["password"]
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Re-Type Password"
                                            id="repassword"
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
                                                onChange: UpdateFormData,
                                                value: formData["repassword"]
                                            }}
                                        />
                                        <label>
                                            <input id="terms" type="checkbox" required onChange={UpdateFormData} value={formData["terms"]} />
                                            <small>I accept Crypto Vault Investment
                                            <Link to="/termsconditions-page" rel="noopener noreferrer" target="_blank" style={{ marginLeft: "2px" }}>
                                                Terms & Conditions
                                            </Link>
                                            </small>
                                        </label>
                                    </CardBody>
                                    <CardFooter className={classes.cardFooter}>
                                        <Button type="submit" simple color="primary" size="lg" onClick={SubmitForm} {...disabled}>
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
