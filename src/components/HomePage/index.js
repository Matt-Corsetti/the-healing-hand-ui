import React from "react";
import {
  Paper,
  Grid,
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
  CardContent,
  Button
} from "@material-ui/core";

import "./home.css";
import candles from "../../img/healinghand-forhim-candle.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary
  }
}));

const defaultProps = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 0,
  style: { width: "10rem", height: "10rem" }
};

function Home() {
  const classes = useStyles();

  return (
    <div className="home-container">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div>
                <h2>THE HEALING HAND’S PHILOSOPHY</h2>
              </div>
              <div>
                <h4>RELAX – MAKE OR BECOME LESS TENSE OR ANXIOUS</h4>
              </div>
              <div>
                <h4>REFRESH – GIVE NEW STRENGTH OR ENERGY TO</h4>
              </div>
              <div>
                <h4>REVITALIZE – IMBUE (SOMETHING) WITH NEW LIFE</h4>
              </div>
              <br></br>
              <div className="p-content">
                <p>
                  I believe that health is maintained by an integrative approach
                  with balance in mind – Everything in moderation. In my
                  opinion, stress is the root of many health issues. In order to
                  cultivate health, we need to{" "}
                  <b>“Relax, Refresh, and Revitalize”</b>. These are the seeds
                  of health.
                </p>{" "}
                <p>
                  <b>Relaxation</b> is one of the first seeds of health. It is
                  important to “slow it down” sometimes. In the stress and chaos
                  of everyday life, people often forget to be good to
                  themselves. Make the time to do something for “you” everyday.
                  Take a walk, soak in the tub, meditate. Use your senses and
                  hear, feel, taste, smell, and see your way back to life.
                  Notice and appreciate the beauty around you. In other words,
                  take the time to smell the roses. Often this is overlooked but
                  has so much value. Once you are less tense, you will have more
                  energy to be able to do the things that you like. This will
                  help you to <b>Refresh</b> and be happy. At this point, the
                  seeds of health are growing, and everything is working better
                  in your life. If you find your passion, you find your
                  vitality, and you <b>Revitalize</b>.
                </p>{" "}
                <p>
                  The goal of The Healing Hand is to help you improve and
                  maintain your health, but through its products and services,
                  The Healing Hand does not claim to cure, diagnose, prescribe,
                  or treat for a specific condition. Individuals with medical
                  conditions or health issues are advised to consult a
                  healthcare professional where appropriate. Always take your
                  own health seriously and seek advice when needed. With this in
                  mind, <b>The Healing Hand</b> offers Healing Services and
                  Healing Products to help you{" "}
                  <b>“Relax, Refresh, and Revitalize”</b>. Together, we can
                  strive towards your health goals. Through my treatments, I aim
                  to help you unwind and relieve stress by helping you Relax
                  your body, mind, and spirit. I am currently offering
                  Reflexology Reiki and Hot Stone Therapy treatments, and I will
                  be expanding to other health modalities, including
                  Acupressure. The Healing Hand also offers Healing Products
                  that have a therapeutic objective. I design Tropical Plant and
                  Air Plant Terrariums and Zen Gardens. Looking at and taking
                  care of plants, and tending a garden help you develop peace of
                  mind, focus, and balance. I also design Bath Salts to help you
                  relax both your mind and body.
                </p>{" "}
                <p>
                  Contact me to set up an appointment for one of my Healing
                  Services or to purchase one of my Healing Products, and{" "}
                  <b>“Let my hands help you maintain your health!”</b>
                </p>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
