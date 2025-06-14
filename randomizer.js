const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const path = require('path');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));




app.get('/', (req, res) => {
    res.render('startmenu')
})
app.listen(
    port,
    () => console.log(`system is now operational`),
    console.log(`local testing at http://localhost:${port}`),
)



