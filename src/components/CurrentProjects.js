import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

import logoLift from "../assets/img/logo/logoLift.png";

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
  return (
    <Box sx={{ 
        display:'flex',
        width:'80%',
        flexDirection:'column',
        marginTop:'2%',
        marginBottom:'2%',
        }}>
      <Grid container rowSpacing={12} columnSpacing={12} justifyContent={'space-around'} alignItems={'center'}>
      <Grid item xs={12} display= {'flex'} justifyContent={'center'}>
        <Title>Obecne projekty</Title>
        </Grid>
        {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={12} md={4} display= {'flex'} justifyContent={'center'}>
            <Link to='/info'>
        <Item>
        <img src={logoLift} alt="profile-pic"/>
        </Item>
            </Link>
        </Grid>
        ))}
      </Grid>
      </Box>
  );
}

export default CurrentProjects;