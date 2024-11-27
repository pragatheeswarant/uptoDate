import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import InfoIcon from '@mui/icons-material/Info';
import InsightsIcon from '@mui/icons-material/Insights';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import Typography from '@mui/material/Typography';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import BugReportIcon from '@mui/icons-material/BugReport';
import WorkIcon from '@mui/icons-material/WorkOutline';
import ConnectWithoutContactIcon from '@mui/icons-material/Contacts';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import  Tooltip  from '@mui/material/Tooltip';

const Navbar = () => {
  const [service, setService] = useState(null);
  const [insights, setInsights] = useState(null);

  const handleServiceClick = (event) => {
    setService(event.currentTarget);
  };

  const handleInsightsClick = (event) => {
    setInsights(event.currentTarget);
  };

  const handleClose = () => {
    setService(null);
    setInsights(null);
  };

  return (
    <nav className='navbar'>
      <Typography variant="h4" align="center" className="text" fontFamily={'sans'}>
        CoreTopia
      </Typography>
      <ul >


        <li  className='ab'>
        <Tooltip title="Get to Know Us"  arrow> 
          <Link to="/about" style={{ display: 'flex', alignItems: 'center' }}>
            <InfoIcon color="action" style={{ margin: '10px' }} /> About us
          </Link>
          </Tooltip>
        </li>
        <Tooltip title='Service Overview'  arrow>
        <li onClick={handleServiceClick} style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
          <SettingsApplicationsIcon color="action" style={{ margin: '10px' }} /> <span>Service</span>
        </li>
        </Tooltip>
        <Menu
          anchorEl={service}
          
          open={Boolean(service)}
          onClose={handleClose}
        >
          <MenuItem >
            <Link to="/dev" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
              <DeveloperModeIcon style={{ margin: '10px' }} /> Development
            </Link>
          </MenuItem>
          <MenuItem >
            <Link to="/bug" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
              <BugReportIcon style={{ margin: '10px' }} /> Bug fixing
            </Link>
          </MenuItem> 
        </Menu>
           
           <Tooltip title='Discover Our Insights' arrow>
        <li onClick={handleInsightsClick} style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
          <InsightsIcon color="action" style={{ margin: '10px' }} /> <span>Insights</span>
        </li>
        </Tooltip>
        <Menu
          anchorEl={insights}
          open={Boolean(insights)}
          onClose={handleClose}
        >
          <MenuItem >
            <Link to="/career" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
              <WorkIcon style={{ margin: '10px' }} /> Career
            </Link>
          </MenuItem>
          <MenuItem >
            <Link to="/contact" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
              <ConnectWithoutContactIcon style={{ margin: '10px' }} /> Contact
            </Link>
          </MenuItem>
        </Menu>

        <li className='ab'>
        <Tooltip title='Admin Dashboard' arrow>
          <Link to="/admin-panel" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <AdminPanelSettingsIcon color="action" style={{ margin: '10px' }} /> Admin panel
          </Link>
          </Tooltip>
        </li>
        <li className='ab'>
        <Tooltip title='Become a Part of Us' arrow>
          <Link to="/form" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <AdsClickIcon color="action" style={{ margin: '10px' }} /> Apply
          </Link>
          </Tooltip>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
