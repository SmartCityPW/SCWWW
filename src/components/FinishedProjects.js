import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import logoFotowoltaika from "../assets/img/logo/logoFotowoltaika.png";

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
  minWidth:'160px',
  minHeight:'160px',
  maxHeight:'160px',
  maxWidth:'160px',
  borderRadius:'10%',
  overflow:'hidden',
}));

const FinishedProjects= () => {
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
        {Array.from(Array(8)).map((_, index) => (
        <Grid item xs={6} md={3} display= {'flex'} justifyContent={'center'}>
        <Item>
        <img src={logoFotowoltaika} alt="profile-pic"/>
        </Item>
        </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FinishedProjects;