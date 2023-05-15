import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import logoLift from "../assets/img/logo/logoLift.png";
import json from '../assets/data/projects.json';


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
    textAlign: 'left',
    color: 'white',
    fontSize:'14px',
    backgroundColor:'transparent',
    boxShadow:'none',
    margin:'3% 3%',
  }));

const AboutProject= (index) => {
  return (
    <Box sx={{ 
        width: '100%',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        background: 'rgba(10,10,36,1)',
        }}>
    <Box sx={{ 
        display:'flex',
        width:'80%',
        minHeight: '80%',
        flexDirection:'column',
        marginTop:'5%',
        marginBottom:'5%',
        backgroundColor:'rgba(56,69,117,1)',
        borderRadius:'10px',
        }}>
      <div>
        <InfoSectionRow>
        <Item>
        <img src={logoLift} alt="profile-pic"/>
        </Item>
        <InfoSectionColumn> 
        <h1>{json.current_projects[0].name}</h1> {json.current_projects[0].description}
        </InfoSectionColumn>
      </InfoSectionRow>
      <InfoSectionColumn>
      <h1>CEL</h1> {json.current_projects[0].goal}
      </InfoSectionColumn>
      <InfoSectionColumn>
      <h1>DZIAŁANIA</h1>
      {Array.from(Array(json.current_projects[0].events.length)).map((_, ind) => (
  <p>{json.current_projects[0].events[ind]}</p>
    ))}
      </InfoSectionColumn>
      <InfoSectionColumn>
      <h1>SKŁAD</h1> 
      {Array.from(Array(json.current_projects[0].team.length)).map((_, ind) => (
  <p>{json.current_projects[0].team[ind]}</p>
    ))}
      </InfoSectionColumn>
      </div>
    </Box>
      </Box>
  );
}

export default AboutProject;
