//only img and description
import React from "react";
import classNames from "classnames";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Card from "../components/Card/Card.js";
import CardAvatar from "../components/Card/CardAvatar.js";
import CardBody from "../components/Card/CardBody.js";
import { makeStyles } from "@material-ui/core/styles";
import teamStyle from "../assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle.js";
import FaceMarc from "../assets/img/faces/marc.jpg";

const useStyles = makeStyles(teamStyle);

function Person(props) {
    const classes = useStyles();
    return (
          <GridItem md={3} sm={3} style={{maxWidth:'215px'}}>
            <Card profile plain style={{marginBottom: "30px",
              marginTop: "30px",}}>
              <CardAvatar profile plain>
                  <img src={FaceMarc} alt="profile-pic" className={classes.img} />
              </CardAvatar>
              <CardBody plain>
                <h4 className={classes.cardTitle}>{props.surname}</h4>
                <h6 className={classes.textMuted}>{props.description}</h6>
              </CardBody>
            </Card>
          </GridItem>
    );
  }
  
  export default Person;