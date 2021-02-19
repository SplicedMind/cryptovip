/*eslint-disable*/
import React, { useContext } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  
  const classes = useStyles();
 
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
      <ListItem className={classes.listItem}>
        <Button
            color="transparent"
            href="login-page"
            target=""
            className={classes.navLink}
            onClick={props.setOpen}
          >
            <i className="fas fa-sign-in-alt" />
            Login
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
            color="transparent"
            href="/signup-page"
            target=""
            className={classes.navLink}
          >
            <i className="fas fa-user-plus" />
            signup
        </Button>
      </ListItem>
    </List>
  );
}
