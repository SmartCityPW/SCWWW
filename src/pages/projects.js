import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import Box from "@mui/material/Box";
import Header from '../components/header';
import MyFooter from "../components/footer.js";
import AllProjects from "../components/AllProjects";
import errorPageStyle from "../assets/jss/material-kit-pro-react/views/errorPageStyles.js";

const useStyles = makeStyles(errorPageStyle);

function Projects() {
    const classes = useStyles();
    return (
        <div className="App">
             <Box className="App" bgcolor="#aeaeae">
            <Header />
            <AllProjects/>
            <MyFooter classes={classes}/>
            </Box>
        </div>
    );
}

export default Projects;
