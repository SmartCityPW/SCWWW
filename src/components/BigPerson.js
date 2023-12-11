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
import FaceKendall from "../assets/img/faces/kendall.jpg";

const useStyles = makeStyles(teamStyle);

function BigPerson(props) {
    const classes = useStyles();

    const h4Styles = {
      fontSize: '18px',
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: '500',
      marginBottom: '10px'
    };

    const h6Styles = {
      fontSize: '12px',
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: '500',
      marginTop: '0px'
    };

    return (
          <GridItem md={2} sm={2} style={{maxWidth:'50vw'}}>
            <Card profile plain style={{marginBottom: "30px",
              marginTop: "30px",}}>
              <CardAvatar profile plain>
                  <img src={FaceKendall} alt="profile-pic" className={classes.img} />
              </CardAvatar>
              <CardBody plain>
                {/* <h4 className={classes.cardTitle}>{props.surname}</h4> */}
                <h4 style={h4Styles}>{props.surname}</h4>
                {/* <h6 className={classes.textMuted}>{props.description}</h6> */}
                <h6 style={h6Styles}>Fajny projekt</h6>
              </CardBody>
            </Card>
          </GridItem>
    );
  }
  
  export default BigPerson;