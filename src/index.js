// import modulos
// const express= require("express");
import express from "express"
import { Route } from "./routes";
import cors from "cors"

// arrancamos los módulos
const app = express();

// carga de archivos estaticos (VUE)
app.use(express.static('public'))

// CORS
app.use(cors())

// variables auxiliares
const PORT = process.env.PORT || 3000

// para req.body (json)
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// configurar rutas
app.use('/api', Route)

// levantar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://127.0.0.1:${PORT}`)
})