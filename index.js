const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const app = express();





// app.get('/', function(request, response){
//     response.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

//emit middleware
app.use(logger);

//handlebars - for views
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');


app.get('/', (request, response) => {
    response.render('index');
})
//Boody Parser configs. return configs
app.use(express.json());
app.use(express.urlencoded({extended: false}));




//set static folder for html
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members1'))


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server started in port : ${PORT}`);
});