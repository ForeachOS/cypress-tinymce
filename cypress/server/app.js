const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

const blogs = [];

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'pug');

app.get('/', (req, res) => res.render('index', {blogs: blogs}));
app.get('/new', (req, res) => res.render('new'));
app.post('/create', (req, res) => {
  blogs.push(req.body);
  res.redirect('/');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));