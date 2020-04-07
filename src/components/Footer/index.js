import React, { useState, Children } from "react";
import { IconButton } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import { green, cyan } from "@material-ui/core/colors";

import "./Footer.css";

const style = {
  backgroundColor: "#343a40",
  color: "white",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "80px",
  width: "100%"
};

const phantom = {
  display: "block",
  padding: "20px",
  height: "80px",
  width: "100%"
};

const styles = {
  largeIcon: {
    width: 60,
    height: 60
  },
  large: {
    width: 120,
    height: 120,
    padding: 30
  }
};

function SimpleFooter() {
  return (
    <div>
      <div style={phantom} />
      <div style={style}>
        <a href="https://www.facebook.com/thehealinghand.ca">
          <FacebookIcon style={{ color: cyan["A200"], fontSize: 40 }} />
        </a>
        <a href="https://www.linkedin.com/company/the-healing-hand111/">
          <LinkedInIcon style={{ color: cyan["A200"], fontSize: 40 }} />
        </a>
        <a href="https://www.instagram.com/the_healing_hand_port_perry/">
          <InstagramIcon style={{ color: cyan["A200"], fontSize: 40 }} />
        </a>
        <a href="https://www.pinterest.ca/thehealinghand1494/">
          <PinterestIcon style={{ color: cyan["A200"], fontSize: 40 }} />
        </a>
      </div>
    </div>
  );
}

export default SimpleFooter;
