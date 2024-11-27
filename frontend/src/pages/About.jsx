import React from 'react';
import './About.css';
import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.png';
import user3 from '../assets/user3.png';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {  Container, Typography, Card, CardMedia,Tooltip, CardContent,  Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <div id="a">
      <Tooltip title="Go to home page" arrow> 
        <Button variant="contained" onClick={handleClick} className='homeabout'>
        <HomeIcon />Home
      </Button></Tooltip>
      <Container maxWidth='xs' style={{ margin: '7%' }}>
        <Paper elevation={18} style={{ padding: '20px' }}>
          <Typography variant="h4" fontFamily={'fantasy'} style={{ margin: '10px' }}>
            ABOUT US
          </Typography>
          <Typography className='about'>
            "Every business knows and understands the gap between the business industry and the IT industry.
            Our mission is to bridge that gap not only in communication but also in professionalism.
            That is why we focus on dual-training programs. Our tech specialists are versed in business and vice versa.
            This allows for a much more harmonious and symbiotic relationship between the two.
            We not only understand the tech your business needs,
            but our specialists understand business functions so we can make your tech work for you,
            not the other way around. When you work with Coretopia,
            you’ll be getting a highly integrated “off-site” IT department for a fraction of the cost of retaining your own."
          </Typography>
        </Paper>
      </Container>
      
      <Container className='team' >
        <Typography className='head' variant="h4"  fontFamily={'fantasy'} color='success'>
          OUR TEAM
        </Typography>
        
        <Grid className='team-member' container spacing={2} >
          <Grid >
            <Card>
              <CardMedia
                component="img"
                alt="User 1"
                height="200"
                image={user1}
              />
              <CardContent>
                <Typography variant="h6">
                  User 1
                </Typography>
                <Typography variant="subtitle1" >
                  Senior Software Engineer
                </Typography>
                <Typography variant="body2" >
                  User1@gmail.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid>
            <Card>
              <CardMedia
                component="img"
                alt="User 2"
                height="200"
                image={user2}
              />
              <CardContent>
                <Typography variant="h6" >
                  User 2
                </Typography>
                <Typography variant="subtitle1" >
                  Senior Software Tester
                </Typography>
                <Typography variant="body2">
                  User2@gmail.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid>
            <Card>
              <CardMedia
                component="img"
                alt="User 3"
                height="200"
                image={user3}
              />
              <CardContent>
                <Typography variant="h6" >
                  User 3
                </Typography>
                <Typography variant="subtitle1" >
                  Designer
                </Typography>
                <Typography variant="body2" >
                  User3@gmail.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
