const fs = require('fs');
const crypto = require('crypto');

let data = fs.readFileSync('./database.json');
data = JSON.parse(data);

/**
 * @constant
 * @route Get /events
 * @default
 */

const GetEventList = (_req, res) => {
  if (!data.length) {
    res.status(404).json({
      success: false,
      message: 'No event found',
    });
  }

  return res.status(200).json({
    success: true,
    message: 'Event\'s list',
    numberEvent: data.length,
    data,

  });
};
/**
 * @constant
 * @route Get /event/:id
 * @default
 */

const GetEventById = (req, res) => {
  const { params } = req;
  const dataEvent = data.filter((event) =>
    event.id === params.id);

  if (!dataEvent.length) {
    res.status(404).json({
      success: false,
      message: `Pas d'évènement trouvé avec l'id: ${params.id}`
    });
  }
  return res.status(200).json({
    success: true,
    message: 'Event\'s data',
    data: dataEvent
  });
};

const ensureBodyIsLowerCase = (body) => body.toLowerCase();

const AddNewEvent = (req, res) => {
  const {
    title, date, email, description,
  } = req.body;

  const isNotAnyErrors = title && email && date;

  if (!title) {
    res.status(400).json({ error: 'Veuillez définir le title de l\'évènement' });
  }
  if (!email) {
    res.status(400).json({ error: 'Veuillez définir le mail de l\'auteur de la création de l\'évènement' });
  }
  if (!date) {
    res.status(400).json({ error: 'Veuillez définir une date' });
  }

  const newEvent = {
    id: crypto.randomBytes(16).toString('hex'),
    date,
    email: ensureBodyIsLowerCase(email),
    description,
    title,
    comments: []

  };

  if (isNotAnyErrors) {
    data.push(newEvent);
    fs.writeFileSync('./database.json', JSON.stringify(data));
    return res.status(200).json({
      success: true,
      message: `L'évènement ${newEvent.title} a été ajouté.`,
      event: newEvent,
    });
  }
};

const checkEventWithId = (id) => data.filter((event) => event.id === id);

/**
 * @constant
 * @route Put /event/:id
 * @default
 */

const AddCommentToExistingEvent = (req, res) => {
  const { id } = req.params;

  const {
    author,
    comment
  } = req.body;

  const isEventFoundWithId = checkEventWithId(id);
  const isEventNotFoundWithThisId = !isEventFoundWithId.length;

  if (isEventNotFoundWithThisId) {
    throw new Error(res.status(404).json({ error: 'Pas d\'évènement trouvé avec cet id' }));
  }

  let eventToUpdate;

  isEventFoundWithId.map((event) => {
    eventToUpdate = event;
    return eventToUpdate;
  });
  const indexOfEventToUpdate = data.findIndex((event) => event.id === id);

  if (!author) {
    res.status(400).json({ error: 'Veuillez définir votre nom' });
  }
  if (!comment) {
    res.status(400).json({ error: 'Veuillez écrire votre commentaire, (140 caractère max)' });
  }
  const commentList = eventToUpdate.comments;

  const newComment = {
    author,
    comment,
    date: new Date()
  };
  const eventWillUpdate = {
    ...eventToUpdate,
    comments: [...commentList]
  };
  eventWillUpdate.comments.push(newComment);

  const isNotAnyErrors = isEventFoundWithId && author && comment;

  if (isNotAnyErrors) {
    data[indexOfEventToUpdate] = eventWillUpdate;

    fs.writeFileSync('./database.json', JSON.stringify(data));

    return res.status(200).json({
      success: true,
      message: `The comment written by ${author} was succesfull added to the event id : ${id}`,
      company: eventWillUpdate
    });
  }
};

module.exports = {
  GetEventList,
  GetEventById,
  AddNewEvent,
  AddCommentToExistingEvent

};
