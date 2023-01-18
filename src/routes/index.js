import { Router } from "express"
import * as authMiddleware from "./../middleware/auth.middleware"
export const Route = Router()

import authController from "./../controllers/auth.controller"
import usuarioController from "./../controllers/usuario.controller"
import categoriaController from "./../controllers/categoria.controller"
import productoController from "../controllers/producto.controller"
import clienteController from "../controllers/cliente.controller"
import pedidoController from "../controllers/pedido.controller"

// para carga de imagenes o archivos
import multer from 'multer'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/imagenes')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + '-' + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })


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

// producto
Route.get('/producto', productoController.listar);
Route.post('/producto', productoController.guardar);
Route.get('/producto/:id', productoController.mostrar);
Route.put('/producto/:id', productoController.modificar);
Route.delete('/producto/:id', productoController.eliminar);

// subir imagen a producto
Route.post('/producto/:id/actualizar-imagen', upload.single("imagen"), productoController.actualizarImagen)

// cliente
Route.get('/cliente', clienteController.listar);
Route.post('/cliente', clienteController.guardar);
Route.get('/cliente/:id', clienteController.mostrar);
Route.put('/cliente/:id', clienteController.modificar);
Route.delete('/cliente/:id', clienteController.eliminar);

// pedido
Route.get('/pedido', pedidoController.listar);
Route.post('/pedido', pedidoController.guardar);
Route.get('/pedido/:id', pedidoController.mostrar);
Route.put('/pedido/:id', pedidoController.modificar);
Route.delete('/pedido/:id', pedidoController.eliminar);
