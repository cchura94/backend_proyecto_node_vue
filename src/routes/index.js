import { Router } from "express"
import * as authMiddleware from "./../middleware/auth.middleware"
export const Route = Router()

import authController from "./../controllers/auth.controller"
import usuarioController from "./../controllers/usuario.controller"
import categoriaController from "./../controllers/categoria.controller"

Route.post('/auth/registro', authController.registro);
Route.post('/auth/login', authController.login);
Route.get('/auth/perfil', authMiddleware.auth, authController.perfil);

// usuarios
Route.get('/usuario', usuarioController.listar);
Route.post('/usuario', usuarioController.guardar);
Route.get('/usuario/:id', usuarioController.mostrar);
Route.put('/usuario/:id', usuarioController.modificar);
Route.delete('/usuario/:id', usuarioController.eliminar);

// categoria
Route.get('/categoria', categoriaController.listar);
Route.post('/categoria', categoriaController.guardar);
Route.get('/categoria/:id', categoriaController.mostrar);
Route.put('/categoria/:id', categoriaController.modificar);
Route.delete('/categoria/:id', categoriaController.eliminar);