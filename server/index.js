const express = require ('express');
const bodyParser = require ('body-parser');
const controller = require ('./controller');
const massive = require ('massive');
require ( 'dotenv' ).config();

const app = express();
app.use( bodyParser.json() );

massive( process.env.CONNECTION_STRING)
.then( ( dbInstance ) => {
    app.set( 'db', dbInstance );
    console.log('connected to the db');
})
.catch( err => {
    console.log(err);
})

app.get('/api/inventory', controller.getInventory)
app.post('/api/products', controller.createProduct)
app.delete('/api/products/:id', controller.deleteProduct)
app.put('/api/products/:id', controller.updateProduct)

const port = process.env.PORT;
app.listen( port, () => console.log(`Hard to port: ${port}`) );