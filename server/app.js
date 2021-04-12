/* eslint no-console: 0, global-require: 0, import/first: 0 */
// if (process.env.NEW_RELIC_LICENSE_KEY && process.env.NEW_RELIC_APP_NAME) {
//     require('newrelic');
//   }
  require('dotenv').config({ silent: true });
  var cors = require('cors')

  const express = require('express');
  const bodyParser = require('body-parser');
  const cookieParser = require('cookie-parser');
  const path = require('path');
  const https = require('https');
  // const fs = require('fs');
//   const logger = require('./services/logger').logger;
  
  const app = express();
  app.use(cookieParser(), cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  
//   if (process.env.NODE_ENV === 'development') {
//     /* eslint-disable global-require */
//     const webpack = require('webpack');
//     const config = require('../config/webpack.config');
//     const compiler = webpack(config);
  
//     app.use(
//       require('webpack-dev-middleware')(compiler, {
//         hot: true,
//         noInfo: true,
//         publicPath: '/dist/',
//         historyApiFallback: true,
//         stats: {
//           colors: true,
//         },
//       })
//     );
  
//   } else {
//     app.use('/dist', express.static(path.join(process.cwd(), 'dist')));
//   }
  
  // app.use('/', express.static('public'));
  app.use('/api', require('./routes'));
  
  const PORT = process.env.PORT || 3001;
  
  app.listen(PORT, () => {
    const nodeString = `[Node ${process.version} ENV: ${(process.env.NODE_ENV || 'local')}]`;
    console.log('%s Listening on: %s ', nodeString, PORT);
  });

  // logger.info('process.env.NODE_ENV %s ', process.env.NODE_ENV);
  // if (process.env.NODE_ENV === 'development') {
  //   process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  //   https.createServer({
  //     key: fs.readFileSync('./certificates/key.pem'),
  //     cert: fs.readFileSync('./certificates/cert.pem'),
  //   }, app).listen(PORT);
  //   logger.info('Listening on: %s ', PORT);
  // } else {
  //   app.listen(PORT, () => {
  //     const nodeString = `[Node ${process.version} ENV: ${(process.env.NODE_ENV || 'local')}]`;
  //     logger.info('%s Listening on: %s ', nodeString, PORT);
  //   });
  // }