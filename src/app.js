'use strict';
// ** Express
import express from 'express';
import http from 'http';

// ** Socket
import { Server } from 'socket.io';

// ** Config
import configApp from './configs/config.js';

// ** Middlewares
import { privateRouter, publicRouter } from './routes/index.js';

// ** Socket
import SocketService from './services/socket.service.js';

// ** Helper
import { ErrorHandler } from './helpers/errHandle.js';
import { verifyToken } from './middlewares/jwt.js';

const app = express();
configApp(app);
const server = http.createServer(app);
const io = new Server(server, { cors: '*' });
global._io = io;

global._io.on('connection', SocketService.connection);

// ** Twilio
import './configs/twilio.js';

app.use('/api/public', publicRouter);

app.use("/api/*", verifyToken)

app.use('/api', privateRouter);

/*
 * Keep error-handler as last middleware
 */
app.use(ErrorHandler);

app.use('/*', (req, res) => {
  res.status(200).json({
    code: 404,
    message: 'API not found'
  });
});

export { server };
