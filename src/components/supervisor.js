//only img and description of a person
import React from "react";
import classNames from "classnames";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import { makeStyles } from "@material-ui/core/styles";
import teamStyle from "../assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle.js";

import Person from "../components/person.js";

import mem from '../assets/data/members21.json';

const useStyles = makeStyles(teamStyle);

function Supervisor() {
    const classes = useStyles();
    return (
        <GridContainer style={{justifyContent:'space-around',
        marginRight: "40px",
        marginLeft: "40px",
        maxWidth:'250px'}}>
        <GridItem style={{maxWidth:'250px'}}>
        <h2 className={classes.title}>opiekun koła</h2>
        </GridItem>
        <GridItem style={{borderRight:'1px solid lightgray'}}>
        <Person surname={mem.supervisor}></Person>
        </GridItem>
        </GridContainer>
    );
  }
  
  export default Supervisor;