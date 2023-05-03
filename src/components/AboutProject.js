import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

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

  const InfoSection = styled(Paper)(({ theme }) => ({
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

const AboutProject= () => {
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
    <InfoSection>
        <h1>LIFT</h1>
            Poruszanie się po labiryncie podziemnych korytarzy Metra Warszawskiego to nie lada
            wyzwanie dla osób ze szczególnymi potrzebami, niepełnosprawnych, niewidomych.
            Windy nie zawsze są dobrze oznakowane i widoczne, a droga do nich potrafi być bardzo
            skomplikowana. Członkowie projektu LIFT tworzą rozwiązanie wspomagające osoby ze
            szczególnymi potrzebami w ich codziennych podróżach transportem szynowym.
    </InfoSection>
    <InfoSection>
        <h1>Cel</h1>
            Poruszanie się po labiryncie podziemnych korytarzy Metra Warszawskiego to nie lada wyzwanie dla osób ze szczególnymi
            potrzebami, niepełnosprawnych, niewidomych. Windy nie zawsze są dobrze oznakowane i widoczne, a droga do nich
            potrafi być bardzo skomplikowana. Członkowie projektu LIFT tworzą rozwiązanie wspomagające osoby ze szczególnymi
            potrzebami w ich codziennych podróżach transportem szynowym.
    </InfoSection>
    </Box>
      </Box>
  );
}

export default AboutProject;