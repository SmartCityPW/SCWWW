import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { useState } from 'react';


import logoLift from "../assets/img/logo/logoLift.png";
import logoCpk from "../assets/img/logo/logoCpk.png";
import logoFotowoltaika from "../assets/img/logo/logoFotowoltaika.png";
import logoHydro from "../assets/img/logo/logoHydro.png";
import json from '../assets/data/projects.json';
import StatefulCityModal from './StatefulCityModal/StatefulCityModal';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#aeaeae',
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
}));

const Title = styled(Paper)(({ theme }) => ({
    width:'100%',
    height:'100%',
    textAlign: 'center',
    color: 'white',
    fontSize:'45px',
    backgroundColor:'transparent',
    boxShadow:'none',
  }));

const CurrentProjects= () => {
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
        marginTop:'2%',
        marginBottom:'2%',
        }}>
      <Grid container rowSpacing={12} columnSpacing={12} justifyContent={'space-around'} alignItems={'center'}>
      <Grid item xs={12} display= {'flex'} justifyContent={'center'} >
        <Title>Obecne projekty</Title>
        </Grid>
        {/* {Array.from(Array(json.current_projects.length)).map((_, index) => (
        <Grid item xs={12} md={4} display= {'flex'} justifyContent={'center'}>
            <Link to='/project/info'>
        <Item>
        <img src={logoLift} alt=""/>
        </Item>
            </Link>
        </Grid>
        ))} */}
        <Grid item xs={12} md={4} display= {'flex'} justifyContent={'center'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link to='/project/lift'>
        <Item>
        <img src={logoLift} alt="" className={isHovered ? 'overlay' :''}/>
        </Item>
            </Link>
        </Grid>

        <Grid item xs={12} md={4} display= {'flex'} justifyContent={'center'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link to='/project/cpk'>
        <Item>
        <img src={logoCpk} alt="" className={isHovered ? 'overlay' :''}/>
        </Item>
            </Link>
        </Grid>

        <Grid item xs={12} md={4} display= {'flex'} justifyContent={'center'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link to='/project/fotowoltaika'>
        <Item>
        <img src={logoFotowoltaika} alt="" className={isHovered ? 'overlay' :''}/>
        </Item>
            </Link>
        </Grid>

        <Grid item xs={12} md={4} display= {'flex'} justifyContent={'center'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link to='/project/hydroponika'>
        <Item>
        <img src={logoHydro} alt="" className={isHovered ? 'overlay' :''}/>
        </Item>
            </Link>
        </Grid>
      </Grid>
      </Box>
  );
}

export default CurrentProjects;