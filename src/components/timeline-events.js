import React from "react";
import classNames from "classnames";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import { makeStyles } from "@material-ui/core/styles";
import teamStyle from "../assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle.js";

import Event from "../components/event.js";

import ev from '../assets/data/events.json';

const useStyles = makeStyles(teamStyle);

function TimelineEvents() {
    const classes = useStyles();
    return (
        
        <GridContainer style={{justifyContent:'space-around',
        marginRight: "40px",
        marginLeft: "40px"}}>       
        {
        // <Event name={ev.events[i]}></Event> ???

        /* <Person surname={mem.members[0]}></Person>
        <Person surname={mem.members[1]}></Person>
        <Person surname={mem.members[2]}></Person>
        <Person surname={mem.members[3]}></Person>
        <Person surname={mem.members[4]}></Person>
        <Person surname={mem.members[5]}></Person>
        <Person surname={mem.members[6]}></Person>
        <Person surname={mem.members[7]}></Person>
        <Person surname={mem.members[8]}></Person>
        <Person surname={mem.members[9]}></Person>
        <Person surname={mem.members[10]}></Person>
        <Person surname={mem.members[11]}></Person>
        <Person surname={mem.members[12]}></Person>
        <Person surname={mem.members[13]}></Person>
        <Person surname={mem.members[14]}></Person>
        <Person surname={mem.members[15]}></Person>
        <Person surname={mem.members[16]}></Person>
        <Person surname={mem.members[17]}></Person>
        <Person surname={mem.members[18]}></Person>
        <Person surname={mem.members[19]}></Person>
        <Person surname={mem.members[20]}></Person>
        <Person surname={mem.members[21]}></Person>
        <Person surname={mem.members[22]}></Person>
        <Person surname={mem.members[23]}></Person>
        <Person surname={mem.members[24]}></Person>
        <Person surname={mem.members[25]}></Person>
        <Person surname={mem.members[26]}></Person>
        <Person surname={mem.members[27]}></Person>
        <Person surname={mem.members[28]}></Person>
        <Person surname={mem.members[29]}></Person> */ }
        </GridContainer>
    );
  }
  
  export default TimelineEvents;