import React from "react";

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

import "./ServicesPage.css";
import reflexology from "../../img/healinghand-reflexology.jpg";
import hotStoneMassage from "../../img/healinghand-hot-stone-massage.png";
import reiki from "../../img/healinghand-reiki.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary
  },
  media: {
    height: 250,
    width: "100%"
  }
}));

function ServicesPage() {
  const classes = useStyles();
  return (
    <div className="services-container">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h1> -- SERVICES -- </h1>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  alt="Product Image"
                  image={reflexology}
                  title="Product Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Relfexology
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This is a product that I hope you will like a lot.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  style={{ height: "250px" }}
                  component="img"
                  alt="Product Image"
                  height="140"
                  image={hotStoneMassage}
                  title="Product Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Hot Stone Massage
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This is a product that I hope you will like a lot.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  style={{ height: "250px" }}
                  component="img"
                  alt="Product Image"
                  height="140"
                  image={reiki}
                  title="Product Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Reiki
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This is a product that I hope you will like a lot.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default ServicesPage;
