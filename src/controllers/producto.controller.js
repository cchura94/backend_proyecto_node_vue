import models from "./../models"

export default {
    listar: async (req, res) => {
        try {
            // paginacion?page=1&limit=2
            let page = parseInt(req.query.page);
            let limit = parseInt(req.query.limit);

            let offset = 0+(page-1) * limit

            let productos = await models.Producto.findAndCountAll({
                limit: limit,
                offset: offset,
                include: models.Categoria
            });

            res.status(200).json(productos);
            
        } catch (error) {
            res.status(500).json({mensaje: "Error al recuperar los datos", error: error});
        }

    },
    guardar: async (req, res) => {
        try {
            const { nombre, stock, precio, estado, descripcion, categoriaId } = req.body
            // validar

            const producto = await models.Producto.create({ nombre, stock, precio, estado, descripcion, categoriaId })
            res.status(201).json({mensaje: "El Producto se ha registrado", data: producto})
        } catch (error) {
            res.status(500).json({mensaje: "Error al guardar los datos", error: error});
        }

    },
    mostrar: async (req, res) => {
        try {
            let producto_id = req.params.id;
            const producto = await models.Producto.findOne({where: {id: producto_id}});

            if (producto == null) {
                res.status(404).json({mensaje: "no se encontro el producto"});
            }else{
                res.status(200).json(producto);            
            }
        } catch (error) {
            res.status(500).send({mensaje: "Error al recuperar el producto", error: error});
        }

    },
    modificar: async (req, res) => {

        try {
            let producto_id = req.params.id;
            let datos = req.body
            const producto = await models.Producto.update(datos, {
                where: {
                  id: producto_id
                }
              });
              res.status(200).json({mensaje: "Producto Actualizado"});  
        } catch (error) {
            res.status(500).send({mensaje: "Error al actualizar el producto", error: error});
        }

    },
    eliminar: async (req, res) => {
        try {
            const producto = await models.Producto.findOne({where: {id: req.params.id}});
            await producto.destroy();

            res.status(200).json({mensaje: "Producto Eliminado"});  
        } catch (error) {
            res.status(500).send({mensaje: "Error al eliminar el producto", error: error});
        }

    },
    actualizarImagen: async (req, res) => {
        try {
            let id = req.params.id;
            let datos = req.body;

            if(req.file){
                datos.imagen = req.file.filename
            }
            console.log(datos)

            models.Producto.update(datos, {where: {id}})

            res.status(200).json({mensaje: "Imagen de Producto Actualizado"});  
        } catch (error) {
            res.status(500).send({mensaje: "Error al actualizar la imagen del producto", error: error});
        }
    }
}