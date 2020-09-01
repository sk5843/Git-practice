const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { exec } = require('child_process');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post('/redeploy', (req, res) => {
  console.log(req.body);
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
