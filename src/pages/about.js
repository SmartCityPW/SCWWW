import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import Header from '../components/header';
import MyFooter from "../components/footer.js";

import errorPageStyle from "../assets/jss/material-kit-pro-react/views/errorPageStyles.js";

import Members from "../components/members.js";
import Management from "../components/management.js";
import Supervisor from "../components/supervisor.js";

import Button from "../components/CustomButtons/Button.js";

const useStyles = makeStyles(errorPageStyle);

function About() {
    const classes = useStyles();
    return (
        <div className="App">
            <Header />
            <h1>2021</h1>
            {/* supervisor, management displayed next to each other-how? */}
            <Supervisor></Supervisor>
            <Management></Management>
            <Members></Members>
            <Button small>poprzednie lata</Button>
            <MyFooter classes={classes}/>
        </div>
    );
}

export default About;
