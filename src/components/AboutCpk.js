import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@material-ui/core/styles";

import logoCpk from "../assets/img/logo/logoCpk.png";
import json from '../assets/data/projects.json';
import { Button } from '@mui/material';
import Header from '../components/header';
import MyFooter from "../components/footer.js";
import AboutProject from "../components/AboutProject";
import errorPageStyle from "../assets/jss/material-kit-pro-react/views/errorPageStyles.js";

const useStyles = makeStyles(errorPageStyle);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'blue',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  minWidth:'250px', //logo graphics dimensions 
  minHeight:'250px',
  maxHeight:'250px',
  maxWidth:'250px',
  borderRadius:'10%',
  overflow:'hidden',
  cursor:'pointer'
}));

const Title = styled(Paper)(({ theme }) => ({
    width:'100%',
    height:'100%',
    textAlign: 'center',
    color: 'white',
    fontSize:'45px',
    backgroundColor:'transparent',
    boxShadow:'none',
    transition: 'all 0.3s ease-in-out'
  }));

  const ButtonReturn = styled(Paper)(({ theme }) => ({
    width:'15%',
    marginTop:'20px',
    padding:'3px',
    backgroundColor:'transparent',
    border:'solid 1px white',
    textAlign: 'center',
    color: 'white',
    fontSize:'12px',
    textAlign:'center'
  }));

  const InfoSectionRow = styled(Paper)(({ theme }) => ({
    display:'flex',
    flexDirection:'row',
    width:'80%',
    textAlign: 'left',
    color: 'white',
    fontSize:'14px',
    backgroundColor:'transparent',
    boxShadow:'none',
    margin:'3% 3%',
  }));


  const InfoSectionColumn = styled(Paper)(({ theme }) => ({
    display:'flex',
    flexDirection:'column',
    width:'80%',
    textAlign: 'justify',
    color: 'white',
    fontSize:'14px',
    backgroundColor:'transparent',
    boxShadow:'none',
    margin:'3% 3%',
  }));

const AboutCpk= (index) => {
    const classes = useStyles();
  return (
    <div className="App">
             <Box className="App" bgcolor="#aeaeae">
            <Header />
    <Box sx={{ 
        width: '100%',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'justify',
        background: '#aeaeae',
        background:'linear-gradient(180deg, #aeaeae 0%, rgba(192,192,192,1) 35%, rgba(23,27,31,1) 100%)', 
        }}>
    <Box sx={{ 
        display:'flex',
        width:'80%',
        minHeight: '80%',
        flexDirection:'column',
        marginTop:'5%',
        marginBottom:'5%',
        backgroundColor:'transparent',
        borderRadius:'10px',
        }}>
          
      <div>
        <InfoSectionRow>
        <Item>
        <img src={logoCpk} alt="profile-pic"/>
        </Item>
        <InfoSectionColumn> 
        <h1>{json.current_projects[1].name}</h1> {json.current_projects[1].description} <ButtonReturn>ZAMKNIJ</ButtonReturn>
      
        </InfoSectionColumn>
      </InfoSectionRow>
      </div>
    </Box>
      </Box>
      <MyFooter classes={classes}/>
            </Box>
        </div>
  );
}

export default AboutCpk;
