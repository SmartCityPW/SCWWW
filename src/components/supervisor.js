//only img and description of a person
import React from "react";
import classNames from "classnames";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import { makeStyles } from "@material-ui/core/styles";
import teamStyle from "../assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle.js";

import BigPerson from "../components/BigPerson.js";

import mem from '../assets/data/members21.json';

const useStyles = makeStyles(teamStyle);

function Supervisor() {
    const classes = useStyles();

    const h2Styles = {
        fontSize: '24px',
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontWeight: '500'
    };

    return (
        <GridContainer style={{maxWidth:'50%'}}>
            <GridItem style={{maxWidth:'100%'}}>
                <h2 style={h2Styles}>Opiekun koła</h2>
            </GridItem>
            <GridItem>
                <BigPerson surname={mem.supervisor}></BigPerson>
            </GridItem>
        </GridContainer>
    );
  }
  
  export default Supervisor;