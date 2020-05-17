import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';
import uuidv4 from 'uuid/v4';
import helmet from 'helmet';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

express() // You can also use Express
  .use((req, res, next) => {
    res.locals.nonce = uuidv4();
    next();
  })
  .use(helmet.hsts({
    maxAge: 31536000,
    includeSubDomains: true
  }))
  .use(helmet.xssFilter())
  .use(helmet.referrerPolicy({ policy: 'strict-origin-when-cross-origin' }))
  .use(
    helmet.featurePolicy({
      features: {
        camera: ["'none'"],
        microphone: ["'none'"],
        speaker: ["'self'"],
        vibrate: ["'none'"],
        geolocation: ["'none'"],
        accelerometer: ["'none'"],
        ambientLightSensor: ["'none'"],
        autoplay: ["'none'"],
        encryptedMedia: ["'none'"],
        gyroscope: ["'none'"],
        magnetometer: ["'none'"],
        midi: ["'none'"],
        payment: ["'none'"],
        pictureInPicture: ["'none'"],
        usb: ["'none'"],
        vr: ["'none'"],
        fullscreen: ['*']
      }
    })
  )
  .use(helmet.hidePoweredBy())
  .use(helmet.noSniff())
  .use(
    helmet.frameguard({
      action: 'deny'
    })
  )
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware()
  )
  .listen(PORT, err => {
    if (err) console.log('error', err);
  });
