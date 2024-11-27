import React from 'react';
import './Dev.css';
import js from '../assets/js.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import react from '../assets/reacr.png';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Typography, CardContent, Tooltip } from '@mui/material';
import Card from '@mui/joy/Card';


const Dev = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <div>
        <Tooltip title="Go to home page" arrow> 
      <Button variant="contained"  onClick={handleClick} className='homedev'>
        <HomeIcon /> Home
      </Button>
      </Tooltip>


      <Card  color='primary' variant='solid' size='md' className='devhead' >
      <Typography variant="h4" component='h4' align="center"  >
      Web Development Tools
    </Typography>
      </Card>


      <div className="container" >
        <div className="card">
          <img src={html} alt="HTML Logo" className="logo" />
          <CardContent className="card-content">
            <Typography variant="h5"  color='info' component="div" align="center">HTML</Typography>
            <Typography variant="body2" color='textPrimary' align="center">
              HTML (HyperText Markup Language) forms the backbone of web content. It structures web pages and provides the basic building blocks for web development.
            </Typography>
          </CardContent>
        </div>


        <div className="card">
          <img src={css} alt="CSS Logo" className="logo" />
          <CardContent className="card-content">
            <Typography variant="h5" component="div"  color='info' align="center">CSS</Typography>
            <Typography variant="body2" color='textPrimary' align="center">
              CSS (Cascading Style Sheets) styles the appearance of web pages. It controls layout, colors, fonts, and overall look of HTML elements.
            </Typography>
          </CardContent>
        </div>


        <div className="card">
          <img src={js} alt="JavaScript Logo"  className="logo" />
          <CardContent className="card-content">
            <Typography variant="h5" component="div"  color='info' align="center">JavaScript</Typography>
            <Typography variant="body2" align="center"  color='textPrimary'>
              JavaScript is a programming language that brings interactivity to web pages. It enables dynamic content updates and interactive features.
            </Typography>
          </CardContent>
        </div>


        <div className="card">
          <img src={react} alt="React Logo" className="logo" />
          <CardContent className="card-content">
            <Typography variant="h5" component="div"  color='info' align="center">React.js</Typography>
            <Typography variant="body2"  color='textPrimary' align="center">
              React.js is a JavaScript library for building user interfaces. It allows developers to create single-page applications with a component-based architecture for efficient updates and rendering.
            </Typography>
          </CardContent>
        </div>

        
      </div>
    </div>
  );
};

export default Dev;
