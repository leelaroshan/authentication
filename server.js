
require('dotenv').config();
require('colors');
const express = require('express');


const users = require('./api/users');

const connectDB = require('./dbinit');
const server = express();
const PORT = process.env.PORT || 5000;


connectDB();

server.use(express.json())

server.get('/', (req, res) => res.send('Welcome to Node with Postgres!'));
server.use('/users', users);



server.listen(PORT, () => console.log(`Server started on port ${PORT}`));





