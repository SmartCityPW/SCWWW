import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

import logoBip from "../assets/img/logo/logoBip.png";
import json from '../assets/data/projects.json';
import logoCivitas from "../assets/img/logo/logoCivitas.png";
import logoCocoNet from "../assets/img/logo/logoCocoNet.png";
import logoMeco from "../assets/img/logo/logoMeco.png";
import logoResquare from "../assets/img/logo/logoResquare.png";
import logoUnivercity from "../assets/img/logo/logoUnivercity.png";
import logoWarsztaty from "../assets/img/logo/logoWarsztaty.png";
import logoWaste from "../assets/img/logo/logoWaste.png";



const Title = styled(Paper)(({ theme }) => ({
    width:'100%',
    height:'100%',
    textAlign: 'center',
    color: 'white',
    fontSize:'45px',
    backgroundColor:'transparent',
    boxShadow:'none',
  }));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
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
  position:'relative'
}));

const FinishedProjects= () => {
  const [isHovered, setIsHovered]=useState(false);


const handleMouseEnter=()=>{
  setIsHovered(true);
};

const handleMouseLeave=()=>{
  setIsHovered(false);
};
  return (

    <Box sx={{ 
        display:'flex',
        width:'80%',
        flexDirection:'column',
        marginTop:'10%',
        marginBottom:'10%',
        }}>
        
      <Grid container rowSpacing={12} columnSpacing={12} justifyContent={'space-around'} alignItems={'center'}>
      <Grid item xs={12} display= {'flex'} justifyContent={'center'}>
        <Title>Zakończone projekty</Title>
        </Grid>

<Grid item xs={12} md={4} display= {'flex'} justifyContent={'center'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Item>
        <img src={logoWaste} alt="profile-pic" className={isHovered ? 'overlay' :''} />
      
        </Item>
        </Grid>

        <Grid item xs={12} md={4} display= {'flex'} justifyContent={'center'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Item>
        <img src={logoBip} alt="profile-pic" className={isHovered ? 'overlay' :''} />
          
        </Item>
        </Grid>

        <Grid item xs={12} md={4} display= {'flex'} justifyContent={'center'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Item>
        <img src={logoCocoNet} alt="profile-pic" className={isHovered ? 'overlay' :''} />
         
        </Item>
        </Grid>

        <Grid item xs={12} md={4} display= {'flex'} justifyContent={'center'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Item>
        <img src={logoUnivercity} alt="profile-pic" className={isHovered ? 'overlay' :''} />
       
        </Item>
        </Grid>

        <Grid item xs={12} md={4} display= {'flex'} justifyContent={'center'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Item>
        <img src={logoCivitas} alt="profile-pic" className={isHovered ? 'overlay' :''} />
       
        </Item>
        </Grid>

        <Grid item xs={12} md={4} display= {'flex'} justifyContent={'center'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Item>
        <img src={logoResquare} alt="profile-pic" className={isHovered ? 'overlay' :''} />
      
        </Item>
        </Grid>

        <Grid item xs={12} md={4} display= {'flex'} justifyContent={'center'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Item>
        <img src={logoWarsztaty} alt="profile-pic" className={isHovered ? 'overlay' :''} />
      
        </Item>
        </Grid>

        <Grid item xs={12} md={4} display= {'flex'} justifyContent={'center'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Item>
        <img src={logoMeco} alt="profile-pic" className={isHovered ? 'overlay' :''} 
        />
       
        </Item>
        </Grid>

      </Grid>
    </Box>
  );
}

export default FinishedProjects;