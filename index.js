const mongoose = require('mongoose');
const app = require('./app');
const usuarioControlador = require('./src/controllers/usuario.controller');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/IN6BM', {useNewUrlParser: true, useUnifiedTopology:true}).then(()=>{
    console.log("Se encuentra conectado a la base de datos.");

    app.listen(3000, function(){
        console.log("Hola Mundo, esta corriendo en el puerto 3000")
    })
    
}).catch(error => console.log(error));

usuarioControlador.administradorDefault()