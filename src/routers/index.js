const express = require('express');
const router = express.Router();
const {authenticate} = require('../authentication');


const usersRouter = require('./users.router');
const accountsRouter = require('./accounts.router');
const profilesRouter = require('./profiles.router');
const friendsRouter = require('./friends.router');
const requestsRouter = require('./requests.router');
const roomsRouter = require("./rooms.router");
const imagesRouter = require('./images.router');

router.use('/images',authenticate, imagesRouter);
router.use('/users', usersRouter);
router.use('/accounts',authenticate, accountsRouter);
router.use('/profiles',authenticate, profilesRouter);
router.use('/friends', authenticate,friendsRouter);
router.use('/requests',authenticate, requestsRouter);
router.use('/rooms',authenticate, roomsRouter);

module.exports = router;