const express = require('express');
const path = require('path');
const compress = require('compression');

const PORT = process.env.PORT || 80;
const app = express();
app.use(compress());

// Ideally, We should use webserver (like nginx) to send the index.html, handling compression
// and serving static content.
// We are using Node Server for demo purposes.
app.use(express.static(path.resolve('../dist')));

app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running at ${PORT}`);
});
