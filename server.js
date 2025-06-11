const express = require('express');
const path = require('path');
const cors = require('cors');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const fs = require('fs');

const dataDir = 'data';
if (!fs.existsSync(dataDir)){
    fs.mkdirSync(dataDir);
}

const adapter = new FileSync('data/db.json');
const db = low(adapter);

db.defaults({ trackingData: [] }).write();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.post('/track', (req, res) => {
    const eventData = { ...req.body, timestamp: new Date().toISOString() };
    db.get('trackingData').push(eventData).write();
    console.log('Tracking event received:', eventData);
    res.status(200).send('Event tracked');
});

app.get('/data', (req, res) => {
    const trackingData = db.get('trackingData').value();
    res.json(trackingData);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
    console.log(`Dashboard available at http://localhost:${port}/index.html`);
}); 