// access express module
const express = require('express');
//create instance of express app
const app = express();
const port = 3000;
// tell app what port it should listen to requests on 
app.listen(port, ()=>{
    console.log(`Hello Enrique! ${port}`);
})

app.set('view engine', 'ejs');

//middlewear

app.use((req, res, next)=>{
    console.log(`Request recieved: ${Date()}`);
    next();
})

// our first route - a route that accepts a get request
// runs a callback function when route is triggered
// req - access to request
// res represents response
app.get('/', (req, res)=>{
    res.send(`Hello, Mrs. Greene!`);
    res.render('pages/index');
})




app.get('/:actor/frank/:character', (req, res, next) => {
    console.log(req.params);
    res.send('Which meme are we talking about?');
})