// import modulos
// const express= require("express");
import express from "express"


// arrancamos los módulos
const app = express();

// variables auxiliares
const PORT = process.env.PORT || 3000

// configurar rutas


// levantar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://127.0.0.1:${PORT}`)
})