
/*require ("appdynamics"). profile ({
    controllerHostName: 'jalasoftcompany831.saas.appdynamics.com',
    controllerPort: 443,
    
    // Si es SSL, asegúrese de habilitar la siguiente línea
    controllerSslEnabled: true,
    accountName: '',
    accountAccessKey: 'n4ufzvuz4fcg',
    applicationName: '',
    tierName: '',
    nodeName: ' '// El controlador agregará automáticamente el nombre del nodo con un número único
   });*/
 require("appdynamics").profile({
    controllerHostName: 'jalasoftcompany831.saas.appdynamics.com',
    controllerPort: 443,
    
    // If SSL, be sure to enable the next line
    controllerSslEnabled: true,
    accountName: 'jalasoftcompany831',
    accountAccessKey: 'n4ufzvuz4fcg',
    applicationName: 'NOde',
    tierName: 'test2',
    nodeName: 'process' // The controller will automatically append the node name with a unique number
});
   
const express = require('express');

const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

require('dotenv//config');

app.use(bodyParser.json());

//import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//routes
app.get('/', (req, res) => {
	res.send('we are on home');
});

app.get('/posts', (req, res) => {
	resp.send('we are on home post');
});
mongoose.connect(
    "mongodb+srv://em7admin:em7admin@cluster0-euepp.mongodb.net/test?retryWrites=true&w=majority",
    {useNewUrlParser: true}, 
    () => console.log('database connected')
);
//how to we listening to tge  server 
app.listen(3310);





