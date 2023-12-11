
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

    const h2Styles = {
        fontSize: '24px',
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontWeight: '500'
      };

    return (
        <GridContainer style={{justifyContent:'space-around', maxWidth:'1140px', margin: 'auto'}}>
        <GridItem>
        <h2 style={h2Styles}>Członkowie koła</h2>
        </GridItem>
        {Array.from(Array(29)).map((_, index) => (
        <Person surname={mem.members[index]}></Person>))}
        </GridContainer>
    );
  }
  
  export default Members;