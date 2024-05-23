'use strict';
const express = require('express');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
// App
const app = express();
app.get('/', (req, res) => {
res.send('Hello Elvis, du hast es geschafft, sogar die Verknüpfung <3 <3 <3 !!!');
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
