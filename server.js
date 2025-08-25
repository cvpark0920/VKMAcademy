const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
const base = '/VKMAcademy';
const buildDir = path.join(__dirname, 'build');

app.use(base, express.static(buildDir, { extensions: ['html'] }));

app.get(`${base}/*`, (req, res) => {
  res.sendFile(path.join(buildDir, 'index.html'));
});

app.listen(port, () => {
  console.log(`Serving ${buildDir} at http://localhost:${port}${base}`);
});
