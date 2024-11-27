import React, { useState } from 'react';
import './Career.css'; 
import HomeIcon from '@mui/icons-material/Home';
import lad from '../assets/lad.png';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/joy/Card';
import { Button, Typography, Collapse,Tooltip,Box } from '@mui/material';


const Career = () => {
  const [details1Visible, setDetails1Visible] = useState(false);
  const [details2Visible, setDetails2Visible] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  const toggleDetails = (detailsId) => {
    if (detailsId === 'details1') {
      setDetails1Visible((prev) => !prev);
    } else if (detailsId === 'details2') {
      setDetails2Visible((prev) => !prev);
    }
  };
  
  return (

    
    <div>
        <Tooltip title="Go to home page" arrow> 
      <Button variant="contained" onClick={handleClick} className='homecareer'>
        <HomeIcon /> Home
      </Button>
      </Tooltip>

      <div  style={{ textAlign: 'center', marginTop:40,marginBottom: 40 }}>
        <Typography variant="h3" component="h1" className='title'>
          CoreTopia
        </Typography>
        <Typography variant="h6" className='subtitle'>
          Building the Future Together
        </Typography>
      </div>

      <Card className='career-container' >

        <Typography variant="h4" color='info' className='openings'  >Opening Roles</Typography>

        <Card className='career-details' color='primary' variant='soft'>
          <Typography variant="h6">Software Tester</Typography>
          <Tooltip title={details1Visible ? "Hide Details" : "Show Details"} arrow>
          <Button 
            variant="contained"
            color='primary' 
            onClick={() => toggleDetails('details1')} 
            size="small"
          >
            {details1Visible ? '-' : '+'}
          </Button>
          </Tooltip>

          <Collapse in={details1Visible}>
            <Box >
              <Typography> * Hiring Software Tester (0 - 1 years).</Typography>
              <Typography> * Good understanding of test plans and automation.</Typography>
              <Typography> * Send your resume to hr@CoreTopia.com</Typography>
            </Box>
          </Collapse>
        </Card>

        <Card className='career-details2' color='primary' variant='soft'>
          <Typography variant="h6">Software Developer</Typography>
          <Tooltip title={details2Visible ? "Hide Details" : "Show Details"} arrow>
          <Button 
            variant='contained' 
            onClick={() => toggleDetails('details2')} 
            size='small'
          >
            {details2Visible ? '-' : '+'}
          </Button>
          </Tooltip>


          <Collapse in={details2Visible}>
            <Box >
              <Typography> * Hiring Software Developer (1 - 3 years experience).</Typography>
              <Typography> * Have problem-solving and understand the software development process</Typography>
              <Typography> * Send your resume to hr@CoreTopia.com</Typography>
            </Box>
          </Collapse>

        </Card>
      </Card>

      



    </div>
  );
};

export default Career;
