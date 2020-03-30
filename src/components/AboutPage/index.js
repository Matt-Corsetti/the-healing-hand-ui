import React from "react";
import "./AboutPage.css";

import {
  makeStyles,
  Paper,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button
} from "@material-ui/core";

import room from "../../img/healinghand-room.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: "center"
  },
  paper: {
    height: 465,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary
  },
  media: {
    height: 250,
    width: "100%"
  },
  card: {
    height: 465,
    textAlign: "left"
  }
}));

function AboutPage() {
  const classes = useStyles();
  return (
    <div className="about-content">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <div className="p-content">
                <p>
                  The Healing Hand is located in the beautiful Town of Port
                  Perry, Ontario, Canada. The Healing Hand offers Healing
                  Services and Healing Products to help you “Relax, Refresh, and
                  Revitalize”. Together, we can strive towards your health
                  goals.
                </p>
                <br></br>{" "}
                <p>
                  Current services include Reflexology, Reiki, and Hot Stone
                  Therapy. Your treatment is carried out in the calm atmosphere
                  of a dedicated room in my smoke-free, pet-free home
                  (especially helpful for those with allergies). The serene
                  ambience of this room is well suited for this purpose. I have
                  carefully chosen inspirational words and images, aromatherapy,
                  as well as other tranquil decor and features. To further this
                  quiet peacefulness, scheduling is done by appointment only,
                  which means that you will be the only client here at that time
                  – unlike the hustle and bustle of other locations (people
                  coming and going, talking…). Furthermore, there is no issue
                  with parking, as you can park on the roundabout right in front
                  of the front entry walkway.
                </p>
                <br></br>{" "}
                <p>
                  The Healing Hand also offers Healing Products that have a
                  therapeutic objective. I design Plant Terrariums with Tropical
                  Plants and Air Plants, as well as Zen Gardens. Looking at and
                  taking care of plants, and tending a garden help you develop
                  peace of mind, focus, and balance. I also design Bath Salts to
                  help you relax both your mind and body. In addition to serving
                  Port Perry, Durham Region, The Healing Hand is conveniently
                  located a short drive from the surrounding areas of Uxbridge,
                  Whitby, Oshawa, Clarington, Ajax, Pickering, and also not too
                  far from Stouffville and Peterborough too! (Click here to see
                  a map and get directions.) The next time you plan to visit
                  Port Perry, why not plan a visit to The Healing Hand! And let
                  my hands help you maintain your health!
                </p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={room}
                  title="Healing Hand Room"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Main Treamtment Room
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This is the main treatment room where you can enjoy a
                    relaxing hot stone massage, reflexology session, or a reiki
                    session.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default AboutPage;
