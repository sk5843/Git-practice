const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let crypto = require('crypto');
const { exec } = require('child_process');

require('dotenv').config();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

function validateSecret(req, res, next) {
  /**
   * Passing an argument to next() in middleware
   * throws an error to the error handler automatically
   */

  const payload = JSON.stringify(req.body);
  if (!payload) {
    return next('Request body empty');
  }
  let sig =
    'sha1=' +
    crypto
      .createHmac('sha1', process.env.WEBHOOK_SECRET)
      .update(payload)
      .digest('hex');
  if (req.headers['x-hub-signature'] == sig) {
    return next();
  } else {
    return next('Signatures did not match');
  }
}

app.post('/redeploy', validateSecret, (req, res) => {
  console.log(req.body);
});

//Error handling middleware
app.use((err, req, res, next) => {
  if (err) console.error(err);
  res.status(403).send('Request body was not signed or verification failed');
});

app.listen(process.env.PORT || 3000, function () {
  console.log(`Listening on port ${process.env.PORT || '3000'}`);
});

// exec('git pull & npm install & pm2 restart', (err, stdout, stderr) => {
//   if (err) {
//     //some err occurred
//     console.error(err);
//   } else {
//     // the *entire* stdout and stderr (buffered)
//     console.log(`stdout: ${stdout}`);
//     console.log(`stderr: ${stderr}`);
//   }
// });
