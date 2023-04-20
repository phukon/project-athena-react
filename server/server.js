const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

app.use(express.static(path.join(__dirname, 'public'))); //Overall, this code snippet allows the web application to serve static files to the client without having to write individual routes for each file.

app.use('/', require('./routes/root')); //This code snippet allows the web application to serve the index.html file to the client when the client requests the root URL.

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ message: 'Not found' });
    } else {
        res.type('txt').send('Not found');
    }
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});