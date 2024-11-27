const express = require('express');
const cors = require('cors');
const User = require('./models/user'); 
const sequelize = require('./db');   

const app = express();
const port = 5000;

app.use(cors());         
app.use(express.json()); 

sequelize.authenticate()
  .then(() => console.log('Connected to MySQL database using Sequelize'))
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    process.exit(1);  
    });


sequelize.sync({ alter: true })  
  .then(() => console.log('User table has been synchronized or created'))
  .catch(err => console.error('Error syncing database:', err));



app.get('/', (req, res) => {
  res.send('Hello, world!');
});


app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll(); 
    res.status(200).json(users);        
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ message: 'Error fetching users from database' });
  }
});


app.post('/users/data', async (req, res) => {
  const { name, dob, email, phone, gender, degree, position, address, experience, skills, age } = req.body;


  if (!name || !dob || !email || !phone || !gender || !degree || !position || !address || !experience || !skills || !age) {
    return res.status(400).json({ message: 'All fields are required.' });
  }


  if (!/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ message: 'Invalid email format.' });
  }

  try {

    const user = await User.create({
      name,
      dob,
      email,
      phone,
      gender,
      degree,
      position,
      address,
      experience,
      skills,
      age,
    });


    res.status(201).json({ message: 'User created successfully', user });
  } catch (err) {
    console.error('Error inserting data:', err);
    res.status(500).json({ message: 'Error inserting data into database', error: err.message });
  }
});


app.delete('/users/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const result = await User.destroy({
      where: { id: userId }
    });

    if (result > 0) {
      res.status(200).json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).json({ message: 'Error deleting user' });
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
