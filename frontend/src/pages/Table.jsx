  import React, { useEffect, useState } from 'react';
  import './Table.css';
  import { useNavigate } from 'react-router-dom';
  import { useSelector, useDispatch } from 'react-redux';
  import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    TextField,
    Select,
    Paper,
    MenuItem,
    Button,
    Typography,
    Tooltip,
    Snackbar,
    Alert,
    Box,
  } from '@mui/material';
  import DeleteIcon from '@mui/icons-material/Delete';
  import LogoutIcon from '@mui/icons-material/Logout';
  import SearchIcon from '@mui/icons-material/Search';
  import InputAdornment from '@mui/material/InputAdornment';
  import { fetchUserData, deleteUser } from '../redux/services/userSlice';



    const Tabled = () => 
      {  
        const dispatch = useDispatch();
        const { data: userData, loading, error } = useSelector((state) => state.users);
      const [selectedRow, setSelectedRow] = useState(null);
      const [sortOrder, setSortOrder] = useState({});
      const [search, setSearch] = useState('');
      const [filter, setFilter] = useState([]);
      const navigate = useNavigate();
      const [ageFilter, setAgeFilter] = useState('');
      const [genderFilter, setGenderFilter] = useState('');
      const [positionFilter, setPositionFilter] = useState('');
      const [experienceFilter, setExperienceFilter] = useState('');
      const [dobFilter, setdobFilter] = useState('');
      const [snackbarOpen, setSnackbarOpen] = useState(false);
      const [deleteMessage, setdeleteMessage] = useState('');

      
      

    
      useEffect(() => {
        dispatch(fetchUserData());
      }, [dispatch]);
      

      const searchFilter = () => {
        if (!search && !dobFilter && !ageFilter && !genderFilter && !positionFilter && !experienceFilter) {
            setFilter(userData);
            return;
        }
    
        const filtered = [];
        for (let i = 0; i < userData.length; i++) {
            const user = userData[i];
            const year = new Date(user.dob).getFullYear();
    
            if (
                user.name.toLowerCase().includes(search.toLowerCase()) ||
                user.address.toLowerCase().includes(search.toLowerCase()) ||
                user.skills.toLowerCase().includes(search.toLowerCase()) ||
                user.degree.toLowerCase().includes(search.toLowerCase()) ||
                user.email.toLowerCase().includes(search.toLowerCase()) ||
                user.phone.toLowerCase().includes(search.toLowerCase())
            ) {
                if (
                    (ageFilter === "21-25" && user.age >= 21 && user.age <= 25) ||
                    (ageFilter === "26-30" && user.age >= 26 && user.age <= 30) ||
                    (ageFilter === "31-40" && user.age >= 31 && user.age <= 40) ||
                    !ageFilter
                ) {
                    if (!genderFilter || user.gender === genderFilter) {
                        if (!positionFilter || user.position === positionFilter) {
                            // Handling experience filter, including "5+" case
                            if (
                                !experienceFilter ||
                                (experienceFilter === "5" && user.experience >= 5) || // 5+ years filter
                                (experienceFilter !== "5" && user.experience == experienceFilter) // Exact match for experience
                            ) {
                                if (
                                    (dobFilter === "1970-1980" && (year >= 1970 && year <= 1980)) ||
                                    (dobFilter === "1981-1990" && year >= 1981 && year <= 1990) ||
                                    (dobFilter === "1991-2000" && year >= 1991 && year <= 2000) ||
                                    (dobFilter === "2001-2010" && year >= 2001 && year <= 2010) ||
                                    !dobFilter
                                ) {
                                    filtered.push(user);
                                }
                            }
                        }
                    }
                }
            }
        }
        setFilter(filtered);
    };
    
      useEffect(() => {
        searchFilter();
      }, [search, userData,dobFilter,ageFilter, genderFilter, positionFilter, experienceFilter ]);
      

      const manualSorting = (column) =>
            
              {

          let sortedData = [...userData];
          let ascending;

        if (sortOrder[column]) 
          {
          ascending = !sortOrder[column];
        }
        else
        {
          ascending = true;
        }

        for (let i = 0; i < sortedData.length - 1; i++)
          {
          for (let j = 0; j < sortedData.length - i - 1; j++) 
            {
            let comparison = 0;
            if (typeof sortedData[j][column] === 'string') 
              {
              comparison = sortedData[j][column].localeCompare(sortedData[j + 1][column]);
            } 
            else if (typeof sortedData[j][column] === 'number') 
              {
              comparison = sortedData[j][column] - sortedData[j + 1][column];
            }

            if (!ascending) 
              {
              comparison = -comparison;
            }

            if (comparison > 0) 
              {
              const temp = sortedData[j];
              sortedData[j] = sortedData[j + 1];
              sortedData[j + 1] = temp;
            }
          }
        }

        setUserData(sortedData);
        setSortOrder({ ...sortOrder, [column]: ascending });
      };

      const handleSort = (column) => {
        manualSorting(column);
      };

      const deleteRow = () => {
        if (selectedRow !== null) {
          const userId = filter[selectedRow].id;
          dispatch(deleteUser(userId));
          setdeleteMessage('Row deleted successfully!');
          setSnackbarOpen(true);
        } else {
          alert('No row selected!');
        }
      };
      
      
      
      
      const getSortIcon = (column) => {
        if (sortOrder[column] !== undefined) 
          {
          if (sortOrder[column]) 
            {
            return '\u2191'; 
          } 
          else
          {
            return '\u2193'; 
          }
        }
      };

      const handleLogout = () => {
        navigate('/');
      };

      const generateRows = () => {
        const rows = [];
        for (let i = 0; i < filter.length; i++) 
          {
          const user = filter[i];
          rows.push(
            <TableRow
            key={i}
            onClick={() => setSelectedRow(selectedRow === i ? null : i)}
            sx={{
              backgroundColor: selectedRow === i ? 'rgba(320, 100, 90, 0.4)' : 'rgba(255, 255, 255, 0.2)',
            }}
            
          >
          
            <TableCell><Typography variant='body2' >{user.name}</Typography></TableCell>
            <TableCell><Typography variant='body2' >{user.dob}</Typography></TableCell>
            <TableCell><Typography variant='body2' >{user.address}</Typography></TableCell>
            <TableCell><Typography variant='body2' >{user.age}</Typography></TableCell>
            <TableCell><Typography variant='body2' >{user.gender}</Typography></TableCell>
            <TableCell><Typography variant='body2' >{user.degree}</Typography></TableCell>
            <TableCell><Typography variant='body2'>{user.email}</Typography></TableCell>
            <TableCell><Typography variant='body2'>{user.phone}</Typography></TableCell>
            <TableCell><Typography variant='body2' >{user.position}</Typography></TableCell>
            <TableCell><Typography variant='body2'>{user.experience}</Typography></TableCell>
            <TableCell><Typography variant='body2'>{user.skills}</Typography></TableCell>
          </TableRow>
          );
        }
        return rows;
      };

      return (
        <div>
          <Box sx={{ p: 7 }}>
          <Paper sx={{ width: '100%', mb: 3 ,padding:'30px'}}>
          <Typography variant="h4" color='info' sx={{ mb: 2 }} >
            SUBMITTED DATA
          </Typography>
          
          
          <TextField
            label="Search..."
            variant="outlined"
            color="info"
            focused
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ mb: 2, width: '100%', maxWidth: '400px' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Tooltip title='Find your answer' placement='right-start' arrow>
                  <SearchIcon color='info' /> 
                  </Tooltip>
                </InputAdornment>
              ),
              sx: { color: 'black' },
            }}
          />
          
            

  <div className='tablefilter'>
        
      <Select value={dobFilter} onChange={(e) => setdobFilter(e.target.value)} size='small' displayEmpty variant='standard' >
              <MenuItem value="">Dob</MenuItem>
              <MenuItem value="1970-1980">1970-1980</MenuItem>
              <MenuItem value="1981-1990">1981-1990</MenuItem>
              <MenuItem value="1991-2000">1991-2000</MenuItem>
              <MenuItem value="2001-2010">2001-2010</MenuItem>
            </Select>
        
    
            
            <Select value={ageFilter} onChange={(e) => setAgeFilter(e.target.value)} size='small' displayEmpty variant='standard' >
              <MenuItem value="">Ages</MenuItem>
              <MenuItem value="21-25">21 to 25</MenuItem>
              <MenuItem value="26-30">26 to 30</MenuItem>
              <MenuItem value="31-40">31 to 40</MenuItem>
            </Select>
          

          
    <Select value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)} size='small' displayEmpty variant="standard" >
              <MenuItem value="">Genders</MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
            
    

            
    <Select value={positionFilter} onChange={(e) => setPositionFilter(e.target.value)} size='small' displayEmpty variant="standard" >
              <MenuItem value="">Positions</MenuItem>
              <MenuItem value="automation tester">Automation Tester</MenuItem>
              <MenuItem value="software developer">Software Developer</MenuItem>
              <MenuItem value="software tester">Software Tester</MenuItem>
              <MenuItem value="manager">Manager</MenuItem>
            </Select>
          
    
          
    <Select value={experienceFilter} onChange={(e) => setExperienceFilter(e.target.value)} size='small' displayEmpty variant="standard" >
              <MenuItem value="">Exp</MenuItem>
              <MenuItem value="1">1 Year</MenuItem>
              <MenuItem value="2">2 Years</MenuItem>
              <MenuItem value="3">3 Years</MenuItem>
              <MenuItem value="4">4 Years</MenuItem>
              <MenuItem value="5">5+ Years</MenuItem>
            </Select> 
          </div>
    
          <TableContainer>
    <Table >
      <TableHead className='TableHead'>
        <TableRow>
          <TableCell >
            <Tooltip title="Sort by Name" arrow>
              <Typography>
              <span>
                <TableSortLabel 
                  active={!!sortOrder.name}
                  direction={sortOrder.name ? 'asc' : 'desc'}
                  onClick={() => handleSort('name')}
                >
                  Name
                </TableSortLabel>
              </span>
              </Typography>
            </Tooltip>
          </TableCell>
          <TableCell>
            <Tooltip title="Sort by Date of Birth" arrow>
              <Typography>
              <span>
                <TableSortLabel
                  active={!!sortOrder.dob}
                  direction={sortOrder.dob ? 'asc' : 'desc'}
                  onClick={() => handleSort('dob')}
                >
                  Dob
                </TableSortLabel>
              </span>
              </Typography>
            </Tooltip>
          </TableCell>
          <TableCell>
            <Tooltip title="Sort by Address" arrow>
              <Typography>
              <span>
                <TableSortLabel
                  active={!!sortOrder.address}
                  direction={sortOrder.address ? 'asc' : 'desc'}
                  onClick={() => handleSort('address')}
                >
                  Address
                </TableSortLabel>
              </span>
              </Typography>
            </Tooltip>
          </TableCell>
          <TableCell>
            <Tooltip title="Sort by Age" arrow>
              <Typography>
              <span>
                <TableSortLabel
                  active={!!sortOrder.age}
                  direction={sortOrder.age ? 'asc' : 'desc'}
                  onClick={() => handleSort('age')}
                >
                  Age
                </TableSortLabel>
              </span>
              </Typography>
            </Tooltip>
          </TableCell>
          <TableCell>
            <Tooltip title="Sort by Gender" arrow>
            <Typography>
              <span>
                <TableSortLabel
                  active={!!sortOrder.gender}
                  direction={sortOrder.gender ? 'asc' : 'desc'}
                  onClick={() => handleSort('gender')}
                >
                  Gender
                </TableSortLabel>
              </span>
              </Typography>
            </Tooltip>
          </TableCell>
          <TableCell>
            <Tooltip title="Sort by Degree" arrow>
            <Typography>
              <span>
                <TableSortLabel
                  active={!!sortOrder.degree}
                  direction={sortOrder.degree ? 'asc' : 'desc'}
                  onClick={() => handleSort('degree')}
                >
                  Degree
                </TableSortLabel>
              </span>
              </Typography>
            </Tooltip>
          </TableCell>
          <TableCell>
            <Tooltip title="Sort by Email" arrow>
            <Typography>
              <span>
                <TableSortLabel
                  active={!!sortOrder.email}
                  direction={sortOrder.email ? 'asc' : 'desc'}
                  onClick={() => handleSort('email')}
                >
                  Email
                </TableSortLabel>
              </span>
              </Typography>
            </Tooltip>
          </TableCell>
          <TableCell>
            <Tooltip title="Sort by Phone" arrow>
              <Typography>
              <span>
                <TableSortLabel
                  active={!!sortOrder.phone}
                  direction={sortOrder.phone ? 'asc' : 'desc'}
                  onClick={() => handleSort('phone')}
                >
                  Phone
                </TableSortLabel>
              </span>
              </Typography>
            </Tooltip>
          </TableCell>
          <TableCell>
            <Tooltip title="Sort by Position" arrow>
            <Typography>
              <span>
                <TableSortLabel
                  active={!!sortOrder.position}
                  direction={sortOrder.position ? 'asc' : 'desc'}
                  onClick={() => handleSort('position')}
                >
                  Position
                </TableSortLabel>
              </span>
              </Typography>
            </Tooltip>
          </TableCell>
          <TableCell>
            <Tooltip title="Sort by Experience" arrow>
            <Typography>
              <span>
                <TableSortLabel
                  active={!!sortOrder.experience}
                  direction={sortOrder.experience ? 'asc' : 'desc'}
                  onClick={() => handleSort('experience')}
                >
                  Exp
                </TableSortLabel>
              </span>
              </Typography>
            </Tooltip>
          </TableCell>
          <TableCell> <Typography>Skills</Typography></TableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>
        {generateRows()}
      </TableBody>
    </Table>
  </TableContainer>


          </Paper>
          </Box>


          <Button id="erase" variant='outlined' color="secondary" size='small' onClick={deleteRow}>
            <DeleteIcon sx={{padding:'2px', marginRight:'2px'}}/>
            <Tooltip title="delete selected row"  arrow >
            <Typography className='erase'>Delete</Typography> 
            </Tooltip>
            <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={() => setSnackbarOpen(false)}>
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" variant='filled'>
          {deleteMessage}
        </Alert>
      </Snackbar>


          
          </Button>
          <Button id="log" variant="outlined" color='warning' size='small' onClick={handleLogout}>
            <LogoutIcon sx={{padding:'2px', marginRight:'2px'}}/>
            <Tooltip title="Logout"  arrow>
          <Typography className='log'>Logout</Typography> 
            </Tooltip>
          </Button>
          
          
        </div>
      );
    };
    
    export default Tabled;