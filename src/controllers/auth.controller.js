import models from "./../models"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export default {
    async registro(req, res){
        
        const { nombre, apellidos, email, password } = req.body
        if(email){
            let user = await models.User.findOne({
                where: {
                    email:email
                }
            })

            if(!user){
                // cifrar el passowrd
                const hash = await bcrypt.hash(password, 12);

                await models.User.create({nombre, apellidos, email, password:hash})
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

    async login(req, res){
        const {email, password} = req.body;

        // busqueda de un usuario por email
        let user = await models.User.findOne({
            where: {email: email}
        })

        // si el usuario no existe
        if(!user){
            return res.status(422).send({mensaje: "Credenciales Incorrectas"})
        }

        // verificar la contraseña
        let correcto = await bcrypt.compare(password, user.password);

        if(correcto){
            let payload = {
                id: user.id,
                email: user.email,
                time: new Date()
            }

            const token = jwt.sign(payload, "MI_CODIGO_SECRETO", {
                expiresIn: 60*60
            })

            res.status(200).send({
                access_token: token,
                usuario: user,
                error: false
            })
        }else{
            return res.status(422).send({mensaje: "Contraseña Incorrecta"})
        }
        
    },
    perfil(req, res){
        res.status(200).send({mensaje: "Mi PERFIL"})

    },
    logout(req, res){

    }
}