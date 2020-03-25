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
  cardStyle: {
    display: "block",
    width: "30vw",
    height: "100%"
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
            <Card className={classes.cardStyle}>
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
                  <Typography variant="body2" color="textPrimary" component="p">
                    Reflexology is a natural healing art in which special
                    technique pressure is applied to reflexes in the head, feet,
                    and hands, which correspond to other parts in the body.{" "}
                    <br></br>
                    <br></br>When special gentle pressure techniques are applied
                    to the reflex points and areas, the corresponding locations
                    in the body are stimulated and blockages and toxins are
                    encouraged to clear. Thus, reflexology stimulates the body
                    to heal itself.<br></br>
                    <br></br>
                    Reflexology can help balance the body’s condition, improve
                    your health, as well as boost your immune system. It is an
                    overall support for wellness, and there has been success
                    with treatments.<br></br>
                    <br></br> The main goal of reflexology is to help you relax
                    by triggering the body into a parasympathetic state, which
                    then stimulates your body to heal itself. Besides releasing
                    endorphins and reducing the production of stress hormones,
                    reflexology also improves your circulation of blood and
                    energy. As a regular treatment, it can help you maintain
                    your health.
                  </Typography>
                </CardContent>
              </CardActionArea>
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
                  <Typography variant="body2" color="textPrimary" component="p">
                    Stone Therapy is the therapeutic use of stones that are
                    either heated or cooled in water with the combination of
                    massage. A variety of different stones (basalt, jade,
                    soapstone…) with different properties (relaxing,
                    revitalizing…) can be used consistently to help relax
                    physical tension and anxiety, soothe aching muscle pain, and
                    ultimately lift your spirit. As ongoing stress can lead to
                    serious health issues, Hot Stone Therapy can be thought of
                    as a preventative measure, and thus should be a part of your
                    health maintenance program.<br></br>
                    <br></br>
                    Hot Stone Therapy originated more than 5000 years ago. Here
                    are some examples of how different cultures used Stone
                    Therapy. It was used in Ayurvedic medicine in India with the
                    stones being warmed in water or on hot coals to relieve
                    muscle pain and discomfort; Native Americans used stones
                    heated by the sun’s rays (heliotherapy) to ease pain,
                    particularly cramps felt during menstruation. They also used
                    them to heat sweat lodges and believed that this ritual
                    could purify and cleanse the body of disease; in Hawaii lava
                    stones were wrapped in ki leaves to heal and protect the
                    body. As you can see, the therapeutic use of stones has been
                    used all around the world for many years as a healing
                    remedy. Modern day Hot Stone Therapy is rooted in a practice
                    that started in 1993 by Mary Nelson of Arizona, who was
                    guided by an inner voice that explained the basis of the
                    current techniques used in Hot Stone Therapy
                  </Typography>
                </CardContent>
              </CardActionArea>
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
                  <Typography variant="body2" color="textPrimary" component="p">
                    Reiki is a Japanese word meaning universal life force energy
                    that flows through all living things. It is not a religion,
                    but rather a gentle non-invasive healing energy which is
                    channeled through the practitioner’s hands into the
                    recipient. When our life force energy is low, our health and
                    well-being is affected. Reiki works to help increase our
                    life force energy and bring balance to our body, mind, and
                    spirit which in turn aids in healing.<br></br>
                    <br></br>
                    Although Reiki is not a new therapy, it is trending and
                    becoming more popular in the health and wellness industry,
                    as it is a great tool for helping you to relax and reduce
                    stress. In the United States, it is used in many hospitals
                    along with conventional medicine and is beginning to gain
                    ground here in Canada. It is also commonly used in hospices
                    and other medical facilities.<br></br>
                    <br></br>
                    There are many ways to treat a person with Reiki, however,
                    through the formal method the recipient, fully-clothed, lies
                    down while the Practitioner holds their hands above the
                    recipient’s body, allowing the flow of Reiki energy. In some
                    regards, Reiki is similar to other forms of
                    hands-on-healing. However, a Reiki Practitioner is given the
                    ability to channel Reiki through a process of initiation
                    known as an attunement which then allows the Practitioner to
                    receive and transmit Reiki energy, as needed.
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

export default ServicesPage;
