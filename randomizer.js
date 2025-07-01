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

app.post('/info_storage', (req, res) => {
    const { operators } = req.body;
    console.log('Received operators:', operators);
    
    // Here you can process the operators as needed
    // For now, just send a response back
    res.json({ message: 'Operators received successfully', operators });
})

app.listen(
    port,
    () => console.log(`system is now operational`),
    console.log(`local testing at http://localhost:${port}`),
)



