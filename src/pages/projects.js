import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import Header from '../components/header';
import MyFooter from "../components/footer.js";

import errorPageStyle from "../assets/jss/material-kit-pro-react/views/errorPageStyles.js";

const useStyles = makeStyles(errorPageStyle);

function Projects() {
    const classes = useStyles();
    return (
        <div className="App">
            <Header />
            <h1>
                Projekty
            </h1>
            <MyFooter classes={classes}/>
        </div>
    );
}

export default Projects;
