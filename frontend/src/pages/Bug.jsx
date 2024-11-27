import React from 'react'
import './Bug.css'
import jas from '../assets/jas.png'
import browser from '../assets/browser.jpeg'
import wdio from '../assets/wdio.png'
import manual from '../assets/manual.png'
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Typography, CardContent,Tooltip } from '@mui/material';
import Card from '@mui/joy/Card';

const Bug = () => {

    const navigate = useNavigate();
    const handleClick = () => {
      navigate('/');
    };

  return (
    <div id="b">
  <Tooltip title="Go to home page" arrow> 
<Button variant="contained"  onClick={handleClick} className='homebug'>
        <HomeIcon /> Home
      </Button>
   </Tooltip>
<Card  color='primary' variant='solid' size='md' className='bughead' >
      <Typography variant="h4" component='h4' align="center"  >
      Testing Tools
    </Typography>
      </Card>

    <div className="container">
        <div className="card">
          <img src={manual} alt="Manual Testing Logo" className="logo" />
          <CardContent className="card-content">
            <Typography variant="h5" color='secondary' component="div" align="center">Manual Testing</Typography>
            <Typography variant="body2" color='textPrimary' align="center">
            Manual testing involves human testers manually checking software for defects. It is crucial for discovering unexpected issues and verifying the application's functionality, usability, and performance
            </Typography>
          </CardContent>
        </div>



    <div className="card">
          <img src={wdio} alt="WebdriverIO Logo" className="logo" />
          <CardContent className="card-content">
            <Typography variant="h5" color='secondary' component="div" align="center">WebdriverIO</Typography>
            <Typography variant="body2" color='textPrimary' align="center">
            WebdriverIO is a custom implementation of Selenium’s WebDriver API. It allows you to run your tests on different browsers and devices while using a simple syntax and rich set of features.    </Typography>
          </CardContent>
        </div>


    <div className="card">
          <img src={jas} alt="Jasmine Logo" className="logo" />
          <CardContent className="card-content">
            <Typography variant="h5" color='secondary' component="div" align="center">Jasmine</Typography>
            <Typography variant="body2" align="center" color='textPrimary'>
      Jasmine is a behavior-driven development framework for testing JavaScript code. It provides a clean and readable syntax for writing tests and helps ensure that your code behaves as expected.
            </Typography>
          </CardContent>
        </div>



        <div className="card">
          <img src={browser} alt="BrowserStack Logo" className="logo" />
          <CardContent className="card-content">
            <Typography variant="h5" color='secondary' component="div" align="center">BrowserStack</Typography>
            <Typography variant="body2" color='textPrimary' align="center">
            BrowserStack provides cloud-based testing across a wide range of browsers and devices. It allows you to perform manual and automated testing, ensuring your applications work seamlessly for users across different environments.            </Typography>
          </CardContent>
        </div>

    </div>
</div>
  )
}

export default Bug