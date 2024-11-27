import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import { TextField, Typography, Container, Tooltip, Paper } from '@mui/material';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setPassword, setError, resetLoginState } from '../redux/loginSlicer';

const Login = () => {
  const username = useSelector((state) => state.login.username);
  const password = useSelector((state) => state.login.password);
  const error = useSelector((state) => state.login.error);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'pass1212') {
      dispatch(setError(''));
      navigate('/table');  
      dispatch(resetLoginState());  
    } else {
      dispatch(setError('Invalid credentials. Please try again.'));
    }
  };

  const handleClick = () => {
    dispatch(resetLoginState());
    navigate('/');
  };

 

  return (
    <div>
      <Tooltip title="Go to home page" arrow>
        <Button variant="contained" onClick={handleClick} className="homelog">
          <HomeIcon /> Home
        </Button>
      </Tooltip>

      <Container component="main" maxWidth="xs">
        <Paper elevation={3} style={{ padding: '30px', marginTop: '120px' }}>
          <Typography variant="h4" align="center" style={{ marginBottom: '10px' }} fontFamily={'serif'}>
            Login
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              variant="standard"
              label="Username"
              fullWidth
              value={username}
              onChange={(e) => dispatch(setUsername(e.target.value))}
              required
            />

            <TextField
              variant="standard"
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
              required
              style={{ marginTop: '30px', marginBottom: '30px' }}
            />

            <Button size="medium" type="submit" color="info" variant="contained" fullWidth>
              Login
            </Button>

            {error && (
              <Typography variant="body2" color="error" align="center" style={{ marginTop: '30px' }}>
                {error}
              </Typography>
            )}
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
