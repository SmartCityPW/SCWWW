
import React from "react";
import classNames from "classnames";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import { makeStyles } from "@material-ui/core/styles";
import teamStyle from "../assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle.js";

import Person from "../components/person.js";

import mem from '../assets/data/members21.json';

const useStyles = makeStyles(teamStyle);

function Members() {
    const classes = useStyles();
    return (
        <GridContainer style={{justifyContent:'space-around',
        marginRight: "40px",
        marginLeft: "40px"}}>
        <GridItem>
        <h2 className={classes.title}>członkowie koła</h2>
        </GridItem>
        {Array.from(Array(29)).map((_, index) => (
        <Person surname={mem.members[index]}></Person>))}
        </GridContainer>
    );
  }
  
  export default Members;