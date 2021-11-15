const express = require('express');
const dotenv = require('dotenv');
const expressLayouts = require('express-ejs-layouts');
const routes = require('./routes/routes');

// Load env vars
dotenv.config({ path: './.env' });

const app = express();
const PORT =process.env.PORT || 5000;

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/mp4', express.static(__dirname + 'public/mp4'));

app.get("/joeApiRoute", (req,res) => {

    /*
        API key here - hidden from people
        node-fetch the unsplash api....
        return the json data
    */

})

// Set Template Engine
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Routes
app.use(routes);

// Listen For Requests
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));