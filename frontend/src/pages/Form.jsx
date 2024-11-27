
import React, { useState } from 'react';
import './Form.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setFormData, resetFormData } from '../redux/formSlicer';
import { useSubmitUserDataMutation } from '../redux/services/userapi';
import {
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
  Checkbox,
  FormGroup,
  Select,
  MenuItem,
  InputLabel,
  Snackbar,
  Alert,
  Tooltip,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const calculateAge = (dob) => {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  return age;
};

const Form = () => {
  const formData = useSelector((state) => state.form.formData);
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);

  const [submitUserData, { isLoading, isError }] = useSubmitUserDataMutation();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    dispatch(
      setFormData({
        ...formData,
        [name]:
          type === 'checkbox'
            ? checked
              ? [...formData.skills, value]
              : formData.skills.filter((skill) => skill !== value)
            : value,
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, dob, email, phone, degree, position, address, experience, skills, gender } = formData;
    const age = calculateAge(dob);

    const newUserData = {
      name,
      dob,
      email,
      phone,
      gender,
      degree,
      position,
      address,
      experience,
      skills: skills.join(', '),
      age,
    };

    try {
      const response = await submitUserData(newUserData).unwrap();

      if (response) {
        setSuccess(true);
        dispatch(resetFormData());
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
      alert('An error occurred while submitting the form');
    }
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <div>
      <Tooltip title="Go to home page" arrow>
        <Button variant="contained" onClick={handleClick} className="homeapply">
          <HomeIcon /> Home
        </Button>
      </Tooltip>

      <form id="form" onSubmit={handleSubmit}>
        <div>
          <Snackbar open={success} autoHideDuration={3000} onClose={() => setSuccess(false)}>
            <Alert onClose={() => setSuccess(false)} severity="success" variant="filled">
              Form submitted successfully!
            </Alert>
          </Snackbar>

          <Typography className="h2" variant="h4" fontFamily={'fantasy'}>
            Fill the Form
          </Typography>

          <div className="form">

            <FormControl fullWidth margin="normal">
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                pattern="[A-Za-z\s]+"
              />
            </FormControl>


            <FormControl fullWidth margin="normal">
              <TextField
                label="Date Of Birth"
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  max: new Date().toISOString().split('T')[0], // Today's date
                }}
              />
            </FormControl>

            
            <FormControl fullWidth margin="normal">
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                type="email"
              />
            </FormControl>

           
            <FormControl fullWidth margin="normal">
              <TextField
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                type="tel"
                pattern="[0-9]{10}"
              />
            </FormControl>

          
            <FormControl fullWidth margin="normal">
              <InputLabel>Degree</InputLabel>
              <Select
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                required
              >
                <MenuItem value="" disabled>Select Degree</MenuItem>
                <MenuItem value="Undergraduate">BSc/BE</MenuItem>
                <MenuItem value="Postgraduate">MSc/ME</MenuItem>
                <MenuItem value="No Degree">No Degree</MenuItem>
              </Select>
            </FormControl>

           
            <FormGroup>
              <label style={{ color: 'black' }}>Skills:</label>
              {['Html', 'Css', 'Javascript', 'Python'].map((skill) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      name="skills"
                      value={skill}
                      checked={formData.skills.includes(skill)}
                      onChange={handleChange}
                    />
                  }
                  label={skill}
                  key={skill}
                  style={{ color: 'black' }}
                />
              ))}
            </FormGroup>

           
            <FormControl fullWidth margin="normal">
              <TextField
                label="Position Applied For"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
              />
            </FormControl>

           
            <FormControl fullWidth margin="normal">
              <TextField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                multiline
                rows={4}
              />
            </FormControl>

            
            <FormControl component="fieldset" margin="normal">
              <label style={{ color: 'black' }}>Gender:</label>
              <RadioGroup name="gender" value={formData.gender} onChange={handleChange} row>
                {['Male', 'Female', 'Other'].map((gender) => (
                  <FormControlLabel
                    key={gender}
                    control={<Radio />}
                    label={gender}
                    value={gender}
                    style={{ color: 'black' }}
                  />
                ))}
              </RadioGroup>
            </FormControl>

            
            <FormControl fullWidth margin="normal">
              <TextField
                label="Experience (in years)"
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                inputProps={{
                  min: 0,
                  max: 10,
                }}
              />
            </FormControl>

            
            <Button variant="contained" color="primary" type="submit" id="save" disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Save'}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
