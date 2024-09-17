 express = require("express")
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');
const mongoose = require('mongoose');

connectDB();
const app = express()
const port = 3000

// Connect to MongoDB
//mongoose.connect('mongodb://localhost/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true });

//const db = mongoose.connection;
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//db.once('open', () => {
  //console.log('Connected to MongoDB');
//});

//app.listen(PORT, () => {
  //console.log(`Server is running on port ${PORT}`);
//});
// DB connectivity code from this site - https://https://devsarticles.com/mongo-db-connection-with-express-js


let books = [];
 app.use(express.json())
 
  app.use('/api', bookRoutes); // Use book routes with prefix '/api'

  app.listen (port ,() => {
    console.log('server running at http://localhost:${port}')
  })

 

