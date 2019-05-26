var express = require('express');
var app = express();
const port_number = 3001;
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
});

app.use(express.static('assets'));

app.listen(port_number, () => {
    console.log(`Listening to the port ${port_number}`)
})