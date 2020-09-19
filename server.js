// Initialize express
const express = require('express');

// Initialize express into a variable called app
const app = express();

// Setup to look for an environment variable first, then use port 5000
const PORT = process.env.PORT || 5000;

// app object has a listen method that takes in port to listen on which is created above.
// Run npm run server to start nodemon server.js
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));








 





// NOTES AND COMMENTS

// Generic get request to '/' and the response
// app.get('/', (req, res) => res.send('Hello World'))
// app.get('/', (req, res) => res.json({ msg: 'Welcome to the Contact Keeper App'}))