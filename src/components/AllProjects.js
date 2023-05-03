import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import logoLift from "../assets/img/logo/logoLift.png";
import FinishedProjects from './FinishedProjects';
import CurrentProjects from './CurrentProjects';


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
}));

const AllProjects= () => {
  return (
    <Box sx={{ 
        width: '100%',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        background: 'rgb(56,69,117)',
        background:'linear-gradient(180deg, rgba(56,69,117,1) 0%, rgba(31,37,74,1) 35%, rgba(10,10,36,1) 100%)', 
        }}>
      <CurrentProjects></CurrentProjects>
    <FinishedProjects></FinishedProjects>
    </Box>
  );
}

export default AllProjects;