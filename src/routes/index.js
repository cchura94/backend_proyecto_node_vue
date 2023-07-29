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
Route.get('/usuario', authMiddleware.auth, usuarioController.listar);
Route.post('/usuario', authMiddleware.auth,usuarioController.guardar);
Route.get('/usuario/:id', authMiddleware.auth,usuarioController.mostrar);
Route.put('/usuario/:id', authMiddleware.auth,usuarioController.modificar);
Route.delete('/usuario/:id', authMiddleware.auth,usuarioController.eliminar);

// categoria
Route.get('/categoria', authMiddleware.auth,categoriaController.listar);
Route.post('/categoria', authMiddleware.auth,categoriaController.guardar);
Route.get('/categoria/:id', authMiddleware.auth,categoriaController.mostrar);
Route.put('/categoria/:id', authMiddleware.auth,categoriaController.modificar);
Route.delete('/categoria/:id', authMiddleware.auth,categoriaController.eliminar);

// producto
Route.get('/producto', authMiddleware.auth,productoController.listar);
Route.post('/producto', authMiddleware.auth,productoController.guardar);
Route.get('/producto/:id', authMiddleware.auth,productoController.mostrar);
Route.put('/producto/:id', authMiddleware.auth,productoController.modificar);
Route.delete('/producto/:id', authMiddleware.auth,productoController.eliminar);

// subir imagen a producto
Route.post('/producto/:id/actualizar-imagen', upload.single("imagen"), productoController.actualizarImagen)

// cliente
Route.get('/cliente', authMiddleware.auth,clienteController.listar);
Route.post('/cliente', authMiddleware.auth,clienteController.guardar);
Route.get('/cliente/:id', authMiddleware.auth,clienteController.mostrar);
Route.put('/cliente/:id', authMiddleware.auth,clienteController.modificar);
Route.delete('/cliente/:id', authMiddleware.auth,clienteController.eliminar);

// pedido
Route.get('/pedido', authMiddleware.auth,pedidoController.listar);
Route.post('/pedido', authMiddleware.auth,pedidoController.guardar);
Route.get('/pedido/:id',authMiddleware.auth, pedidoController.mostrar);
Route.put('/pedido/:id', authMiddleware.auth,pedidoController.modificar);
Route.delete('/pedido/:id', authMiddleware.auth,pedidoController.eliminar);
