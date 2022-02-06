const express = require('express');

const router = express.Router();
const Controllers = require('../controllers/Controllers');

router.get('/events', Controllers.GetEventList);

router.get('/event/:id', Controllers.GetEventById);

router.post('/new-event', Controllers.AddNewEvent);

router.put('/event/:id', Controllers.AddCommentToExistingEvent);

module.exports = router;
