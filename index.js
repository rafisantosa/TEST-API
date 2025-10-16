const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRouter');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/user', userRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}
