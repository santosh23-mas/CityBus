const express = require('express');
const app = express();
const dbconfig = require('./database'); 
const port = process.env.PORT || 3500;
const ticket_routes = require('./routes/ticket_route');


app.use('/api/tickets',ticket_routes)
app.listen(port , () => console.log('Node server started using nodemonb'));