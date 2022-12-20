// import modulos
// const express= require("express");
import express from "express"
import { Route } from "./routes";


// arrancamos los módulos
const app = express();

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