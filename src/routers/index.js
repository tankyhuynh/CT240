const express = require('express');
const router = express.Router();


const usersRouter = require('./users.router');
const accountsRouter = require('./accounts.router');
const profilesRouter = require('./profiles.router');
const friendsRouter = require('./friends.router');
const requestsRouter = require('./requests.router');
const roomsRouter = require("./rooms.router");
const imagesRouter = require('./images.router');

router.use('/images', imagesRouter);
router.use('/users', usersRouter);
router.use('/accounts', accountsRouter);
router.use('/profiles', profilesRouter);
router.use('/friends', friendsRouter);
router.use('/requests', requestsRouter);
router.use('/rooms', roomsRouter);

module.exports = router;