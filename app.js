const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static("public"))


app.get('/', async (req, res) => {
    try {
        res.render('index');

    } catch (err) {
        console.log(err);
        res.send('server error');
    }
});



app.listen(8000, () => {
    console.log('Listening on port #8000');
});