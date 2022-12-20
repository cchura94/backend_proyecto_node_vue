import models from "./../models"

export default {
    async registro(req, res){
        
        const { nombre, apellidos, email, password } = req.body
        if(email){
            let user = await models.User.findOne({
                where: {
                    email:req.body.email
                }
            })

            if(!user){
                // cifrar el passowrd
                await models.User.create({nombre, apellidos, email, password})
                return res.status(200).send({
                    mensaje: "Usuario registrado"
                })
            }else{
                res.status(200).send({mensaje: "El correo ya existe"})
            }
        }else{
            res.status(200).send({mensaje: "El correo es obligatorio"})
        }
    },
    login(req, res){

    },
    perfil(req, res){

    },
    logout(req, res){

    }
}