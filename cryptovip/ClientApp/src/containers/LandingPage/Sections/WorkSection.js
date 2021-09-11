import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import axiosInstance from "helpers/axiosInstance";
import { useState } from "react";

const useStyles = makeStyles(styles);

export default function WorkSection() {
    const classes = useStyles();

    const [message, setMessage] = useState({});

    const onChange = (e) => {
        setMessage({ ...message, [e.target.id]: e.target.value });
    }

    const sendMessage = () => {
        debugger
        axiosInstance()
            .post('user/sendmessage', message)
            .then((res) => {

                if (res.data.success) {
                   
                }
                else {
                    
                }
            })
            .catch((err) => {
                console.log('err', err)
                
            });
    }

    return (
        <div id='contact' className={classes.section}>
            <GridContainer justify="center">
                <GridItem cs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Get in touch</h2>
                    <h4 className={classes.description}>Please fill in your details</h4>
                    <form>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    labelText="Your Name"
                                    id="name"                                    
                                    formControlProps={{
                                        fullWidth: true,
                                        onChange: onChange,
                                        value: message?.name
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    labelText="Your Email"
                                    id="email"
                                    formControlProps={{
                                        fullWidth: true,
                                        onChange: onChange,
                                        value: message?.email
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
                                <CustomInput
                                    labelText="Where did you hear about us"
                                    id="hearaboutus"
                                    formControlProps={{
                                        fullWidth: true,
                                        onChange: onChange,
                                        value: message?.hearaboutus
                                    }}
                                />
                            </GridItem>
                            <CustomInput
                                labelText="Your Message"
                                id="message"
                                formControlProps={{
                                    fullWidth: true,
                                    className: classes.textArea,
                                    onChange: onChange,
                                    value: message?.message
                                }}
                                inputProps={{
                                    multiline: true,
                                    rows: 5
                                }}
                            />
                            <GridItem xs={12} sm={12} md={4}>
                                <Button color="primary" onClick={sendMessage}>Send Message</Button>
                            </GridItem>
                        </GridContainer>
                    </form>
                </GridItem>
            </GridContainer>
        </div>
    );
}
