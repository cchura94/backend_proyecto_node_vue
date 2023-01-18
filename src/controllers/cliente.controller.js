import { Op } from "sequelize";
import models from "./../models"

export default {
    listar: async function(req, res) {
        // cliente?q=23435
        let q = req.query.q;

        const { count, rows } = await models.Cliente.findAndCountAll({
            where: {
                nombre_completo: {
                [Op.like]: `%${q}%`
                }
            }
        });

        console.log(rows)
        res.json(rows)
    },
    guardar: async function (req, res) {
        try {
            const { nombre_completo, telefono, correo } = req.body
            // validar

            const cliente = await models.Cliente.create({ nombre_completo, telefono, correo })
            res.status(201).json({mensaje: "El Cliente se ha registrado", data: cliente})
        } catch (error) {
            res.status(500).json({mensaje: "Error al guardar los datos", error: error});
        }
    },
    mostrar: async function(req, res) {


    },
    modificar: async function(req, res) {

    },
    eliminar: async function(req, res) {

    }
}