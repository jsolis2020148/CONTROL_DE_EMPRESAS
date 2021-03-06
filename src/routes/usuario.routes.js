const express = require('express');
const usuarioControlador = require('../controllers/usuario.controller');
const md_autenticacion = require('../middlewares/autenticacion');

var api = express.Router();

api.post('/registrarEmpresa', md_autenticacion.Auth, usuarioControlador.RegistrarEmpresa);
api.post('/login', usuarioControlador.Login);
api.put('/editarEmpresa/:idEmpresa', md_autenticacion.Auth, usuarioControlador.EditarEmpresa);
api.delete('/eliminarEmpresa/:idEmpresa', md_autenticacion.Auth, usuarioControlador.EliminarEmpresa);

module.exports = api;