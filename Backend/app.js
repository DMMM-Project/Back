const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');
const surveyRoutes = require('./routes/survey');
const categoryRoutes = require('./routes/category');
const foodRoutes = require('./routes/food');

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://matteomoisant:kRi90qfu5fg4yKLu@cluster.dezlwa8.mongodb.net/DMMM-Project-BD?retryWrites=true&w=majority',
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    next();
});

app.use(bodyParser.json());

app.use('/api/auth', userRoutes);
app.use('/api/survey', surveyRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/food', foodRoutes);


const pathFront = __dirname.replace('Backend', 'Frontend');

// Static Files
app.use(express.static('public'));
// Specific folder example
app.use('/css', express.static(pathFront + '/public/css'))
app.use('/js', express.static(pathFront + '/public/js'))
app.use('/img', express.static(pathFront + '/public/img'))

// Set View’s
app.set('views', pathFront + '/views');

// Navigation
app.get('', (req, res) => {
    res.sendFile(pathFront + '/views/index.html')
})

app.get('/survey', (req, res) => {
    res.sendFile(pathFront + '/views/survey.html')
})

app.get('/results', (req, res) => {
    res.sendFile(pathFront + '/views/results.html')
})



module.exports = app;