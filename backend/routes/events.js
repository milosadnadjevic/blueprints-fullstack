const express = require('express');
const router = express.Router();
const event1 = require('../data/event1.json');
const event2 = require('../data/event2.json');

const events = {
  '1': event1,
  '2': event2
};

router.get('/:eventId', (req, res) => {
  const { eventId } = req.params;
  const event = events[eventId];
  
  if (!event) {
    return res.status(404).json({ error: 'Event not found' });
  }
  
  res.json(event);
});

router.get('/', (req, res) => {
  const eventList = Object.keys(events).map(id => ({
    id,
    title: events[id].hero.title,
    date: events[id].hero.date,
    location: events[id].hero.location
  }));
  
  res.json(eventList);
});

module.exports = router;
