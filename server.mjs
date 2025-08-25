import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;
const base = '/VKMAcademy';
const buildDir = path.join(__dirname, 'build');

app.use(base, express.static(buildDir, { extensions: ['html'] }));

app.get(`${base}/:path(*)`, (req, res) => {
  res.sendFile(path.join(buildDir, 'index.html'));
});

app.listen(port, () => {
  console.log(`Serving ${buildDir} at http://localhost:${port}${base}`);
});
