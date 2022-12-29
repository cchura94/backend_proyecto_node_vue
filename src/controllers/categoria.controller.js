import models from "./../models"

export default {
    async listar(req, res){
        let categorias = await models.Categoria.findAll();

        res.status(200).send(categorias)
    },
    async guardar(req, res){
        let datos = req.body;

        await models.Categoria.create(datos)

        return res.status(201).send({
            mensaje: "Categoria registrada"
        })

    },
    mostrar(req, res){
        let id = req.params.id;

    },
    async modificar(req, res){
        let id = req.params.id;
        let datos = req.body;

        await models.Categoria.update(datos, {
            where: {
                id: id
            }
        });

         return res.status(200).send({
            mensaje: "Categoria actualizada"
        })

    },
    async eliminar(req, res){
        let id = req.params.id;

        await models.Categoria.destroy({
            where: {
                id: id
            }
        })

        return res.status(200).send({
            mensaje: "Categoria eliminada"
        })
    }
}