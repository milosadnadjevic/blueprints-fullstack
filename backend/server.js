const express = require('express');
const cors = require('cors');
const eventsRouter = require('./routes/events');

const app = express();
const PORT = process.env.PORT || 5001;


app.use(cors());
app.use(express.json());

app.use('/api/events', eventsRouter);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Blueprint Series API is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
