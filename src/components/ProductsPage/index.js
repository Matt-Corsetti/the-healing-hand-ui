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

import "./ProductPage.css";
import terrarium from "../../img/healinghand-terrarium.JPG";
import zen from "../../img/healinghand-zen.JPG";
import candle from "../../img/healinghand-candle.JPG";
import bathSalts from "../../img/healinghand-bath-salts.JPG";
import crystals from "../../img/healinghand-crystals.JPG";

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

function Products() {
  const classes = useStyles();
  return (
    <div className="product-container">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  style={{ height: "250px" }}
                  component="img"
                  alt="Product Image"
                  height="140"
                  image={terrarium}
                  title="Product Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Terrariums
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
                  image={zen}
                  title="Product Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Zen Gardens
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
                  image={bathSalts}
                  title="Product Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Bath Salts
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
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  style={{ height: "250px" }}
                  component="img"
                  alt="Product Image"
                  height="140"
                  image={crystals}
                  title="Product Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Crystals
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
export default Products;
