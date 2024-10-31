const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Use process.env.PORT for Azure

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
