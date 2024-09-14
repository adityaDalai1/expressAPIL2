const express = require("express")
const mongoose = require('mongoose');
const app = express()
const port = 3000

// Connect to MongoDB
mongoose.connect('mongodb://localhost/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// DB connectivity code from this site - https://https://devsarticles.com/mongo-db-connection-with-express-js



















app.get("/", (req, res) => {
    res.send("hello world")
});

let books = [];
 app.use(express.json())
 // create a book 

 app.post('/books', (req, res) => {
    //logic to add a book
    const { title, author } = req.body;
    if (!title || !author) {
      return res.status(400).send('Missing title or author');
    }
  
    const newBook = { id: books.length + 1, title, author };
    books.push(newBook);
    res.status(201).send(newBook);
 });

 //get all book
 app.get('/books', (req, res) => {
    res.json(books);

 })

 app.get('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) {
      return res.status(404).send('Book not found');
    }
    res.json(book);
  });

  app.put('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) {
      return res.status(404).send('Book not found');
    }
  
    const { title, author } = req.body;
    book.title = title || book.title;
    book.author = author || book.author;
  
    res.send(book);
  });
  app.delete('/books/:id', (req, res) => {
    const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
    if (bookIndex === -1) {
      return res.status(404).send('Book not found');
    }
  
    books.splice(bookIndex, 1);
    res.status(204).send();
  });

  app.listen (port ,() => {
    console.log('server running at http://localhost:${port}')
  })

 

