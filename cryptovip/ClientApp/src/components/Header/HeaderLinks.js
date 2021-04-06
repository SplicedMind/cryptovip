/*eslint-disable*/
import React, { useContext } from "react";
// react components for routing our app without refresh
import { Link, useLocation } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import isAuthenticated from "utils/isAuthenticated";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {

    const classes = useStyles();
    const { pathname } = useLocation();
    const isAuth = isAuthenticated();

    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <Button
                    href="/"
                    color="transparent"
                    target=""
                    className={classes.navLink}

                >
                    <i className="fas fa-home" />
                    Home
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    href="/#about"
                    target=""
                    color="transparent"
                    className={classes.navLink}
                    onClick={props.setOpen}
                >
                    <i className="fas fa-building" />
                    About
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    color="transparent"
                    href="/#portfolio"
                    target=""
                    className={classes.navLink}
                    onClick={props.setOpen}
                >
                    <i className="fas fa-briefcase" />
                    Portfolio
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    color="transparent"
                    href="/#contact"
                    target=""
                    className={classes.navLink}
                    onClick={props.setOpen}
                >
                    <i className="fas fa-address-book" />
                    Contact
                </Button>
            </ListItem>
            { !pathname.includes('/profile') && !isAuth &&
                <ListItem className={classes.listItem}>
                    <Button
                        color="transparent"
                        href="/login"
                        target=""
                        className={classes.navLink}
                        onClick={props.setOpen}
                    >
                        <i className="fas fa-sign-in-alt" />
                        Login
                    </Button>
                </ListItem>
            }

            {!pathname.includes('/profile') && !isAuth &&
                <ListItem className={classes.listItem}>
                    <Button
                        color="transparent"
                        href="/signup"
                        target=""
                        className={classes.navLink}
                    >
                        <i className="fas fa-user-plus" />
                        signup
                    </Button>
                </ListItem>
            }

            {!pathname.includes('/profile') && isAuth &&
                <ListItem className={classes.listItem}>
                    <Button
                        color="transparent"
                        href="/profile/dashboard"
                        target=""
                        className={classes.navLink}
                    >
                        <i className="fas fa-user" />
                        profile
                    </Button>
                </ListItem>
            }

            { isAuth &&
                <ListItem className={classes.listItem}>
                    <Button
                    color="transparent"
                    href="/"
                    target=""
                    className={classes.navLink}
                    onClick={() => {
                        sessionStorage.removeItem('token');
                        sessionStorage.removeItem('user');
                    }}
                    >
                    <i className="fas fa-sign-out-alt"></i>
                        logout
                    </Button>
                </ListItem>
            }
        </List>
    );
}
