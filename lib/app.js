const express = require('express');
const app = express();
const notesRoutes = require('./routes/notes');

app.use(express.json());

app.use('/api/v1/notes', notesRoutes);

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
