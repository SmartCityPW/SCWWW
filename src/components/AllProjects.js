import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import logoLift from "../assets/img/logo/logoLift.png";
import FinishedProjects from './FinishedProjects';
import CurrentProjects from './CurrentProjects';


const AllProjects= () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box sx={{ 
        minWidth: '100%',
        minHeight: '100%',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        background:'linear-gradient(180deg, rgba(23,27,31,1) 0%, rgba(192,192,192,1) 35%, #aeaeae 100%)', 
        }}>
      <CurrentProjects></CurrentProjects>
    <FinishedProjects></FinishedProjects>
    </Box>
  );
}

export default AllProjects;