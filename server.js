const express = require('express');
const app = express();
const PORT = 5503; // Change this to the desired port number

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.post('/login', (req, res) => {
    console.log('Login form received');
   // res.send('Hello, world!');
    res.status(200).send({success: true});
    });
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
