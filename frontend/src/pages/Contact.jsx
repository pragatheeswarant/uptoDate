import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Paper, Tooltip,Button,  CardContent, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Contact.css';
import Card from '@mui/joy/Card';

const Contact = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <div>
       <Tooltip title="Go to home page" arrow> 
        <Button variant="contained" onClick={handleClick} className='homecontact'>
          <HomeIcon /> Home
        </Button>
        </Tooltip>
    
      <div style={{ textAlign: 'center', marginTop:40,marginBottom: 40 }}>
        <Typography variant="h3" component="h1" className='title'>
          CoreTopia
        </Typography>
        <Typography variant="h6" className='subtitle'>
          Building the Future Together
        </Typography>
      </div>


<div  >
     
     
       <Paper elevation={1}   variant='elevation' style={{ padding: 30 ,marginLeft:'25%',maxWidth:'50%'}}>
        <Typography variant="h3" align='left'  fontSize={30} color='primary' >
          Contact Us
        </Typography>


        <Card variant='soft' color='primary' style={{ margin: '16px 0' }}>
          <CardContent>
            <Typography variant="h6">Our Address</Typography>
            <Typography variant="body1">Headquarters</Typography>
            <Typography variant="body1">Broken Arrow, OK</Typography>
            <Typography variant="body1">USA</Typography>
          </CardContent>
        </Card>

        <Card  variant='soft' color='primary' style={{  margin: '16px 0' }}>
          <CardContent>
            <Typography variant="body1">SF No.347/2, Om Namasivaya Nagar,</Typography>
            <Typography variant="body1">Thudiyalur Rd, Saravanampatti,</Typography>
            <Typography variant="body1">Coimbatore, Tamil Nadu, India</Typography>
          </CardContent>
        </Card>


        <Card  variant='soft' color='primary' style={{  margin: '16px 0' }}>
          <CardContent>
            <Typography variant="h6">Follow Us</Typography>
            <div className="icons">
              <IconButton href="https://www.linkedin.com/company/coretopia/" title="Follow us on LinkedIn" color="primary">
                <LinkedInIcon />
              </IconButton>
              <Typography variant="body2" component="span">LinkedIn</Typography>
            </div>
          </CardContent>
        </Card>

        <Card variant='soft' color='primary' >
       
          <Typography variant="h6" color='info'>Our Location</Typography>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.498124163735!2d-97.83108428416676!3d36.060590779861764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b9b0d7cda07f9d%3A0x6a5eebd43fd98d2b!2sHeadquarters%2C%20Broken%20Arrow%2C%20OK!5e0!3m2!1sen!2sus!4v1648207287491!5m2!1sen!2sus"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            title="Our Location"
          ></iframe>
        
        </Card>
      </Paper>
      </div>
    </div>
  );
};

export default Contact;
