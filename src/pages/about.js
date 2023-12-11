import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import Header from '../components/header';
import MyFooter from "../components/footer.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";

import errorPageStyle from "../assets/jss/material-kit-pro-react/views/errorPageStyles.js";

import Members from "../components/members.js";
import Management from "../components/management.js";
import Supervisor from "../components/supervisor.js";
import Chair from "../components/chair.js";
import Button from "../components/CustomButtons/Button.js";

const useStyles = makeStyles(errorPageStyle);

function About() {
    const classes = useStyles();

    const h1Styles = {
        fontSize: '36px',
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontWeight: '500',
        paddingTop: '150px',
        paddingBottom: '20px',
        marginTop: '0px'
      };

    return (    
        <div className="App" style={{backgroundColor: '#f5f5f5'}}>
            <Header />
            <h1 style={h1Styles}>Skład 2021</h1>    
            <GridContainer style={{justifyContent:'space-around', maxWidth:'1140px', margin: 'auto'}}>
                <Supervisor></Supervisor>
                <Chair></Chair>
            </GridContainer>
            <hr style={{maxWidth:'1140px'}}/>
            <Management></Management>
            <hr style={{maxWidth:'1140px'}}/>
            <Members></Members>
            <Button small>Poprzednie lata</Button>
            <MyFooter classes={classes}/>
        </div>
    );
}

export default About;
