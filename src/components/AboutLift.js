import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';

import logoLift from "../assets/img/logo/logoLift.png";
import json from '../assets/data/projects.json';
import { Button } from '@mui/material';
import Header from '../components/header';
import MyFooter from "../components/footer.js";
import errorPageStyle from "../assets/jss/material-kit-pro-react/views/errorPageStyles.js";


const useStyles = makeStyles(errorPageStyle);


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'blue',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  minWidth:'250px', 
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
    width:'50px',
    marginTop:'20px',
    padding:'3px',
    backgroundColor:'transparent',
    border:'solid 1px white',
    textAlign: 'center',
    color: 'white',
    fontSize:'12px',
    textAlign:'center',
    textDecoration:'none',
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
    margin:'0% 3%',
  }));


  const InfoSectionColumn = styled(Paper)(({ theme }) => ({
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    width:'80%',
    textAlign: 'justify',
    color: 'white',
    fontSize:'14px',
    backgroundColor:'transparent',
    boxShadow:'none',
    margin:'3% 3%',
  }));

const AboutLift= (index) => {
    const classes = useStyles();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    const windowWidth = useWindowWidth();

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
        }}>
    <Box sx={{ 
        display:'flex',
        marginTop:'13%',
        width:'80%',
        minHeight: '80%',
        padding:'15px',
        flexDirection:'column',
        marginBottom:'5%',
        backgroundColor:'transparent',
        borderRadius:'10px',
        backgroundColor:'rgba(23,27,31,1)',
        }}>
          
      <div>
        <InfoSectionRow>

        {windowWidth > 900 ? <Item>
        <img src={logoLift} alt="profile-pic"/>
        </Item> : ""}
        


        <InfoSectionColumn> 
        <h1>{json.current_projects[0].name}</h1> {json.current_projects[0].description} <Link to='/projekty'><ButtonReturn>ZAMKNIJ</ButtonReturn></Link>
      
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

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(undefined);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowWidth;
}

export default AboutLift;