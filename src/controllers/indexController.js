let menu = require('../menu.json')

module.exports = {
    home:(req,res) =>{
        
        return res.render('index',{
            menu
        })
    },
    menu: (req,res) =>{
        return res.render('detalleMenu',{
            menu
        })
    },
    detalle: (req,res) =>{
        let id = +req.params.id /* este id llega como tipo de dato string, para pasar a  number va con un + adelante del req.params */
        let plato = menu.find(plato => plato.id === id)/* iteramos el array y nos devuelve el plato segun el id que llega de req.params el === id es el id de let id */

        return res.render('detalleMenu',{
            plato
        })/* esto es lo que enviaremos a la vista  */
    },
}

/* req.params.id = guarda el id( aqui puede llegar cualquier tipo de elemento) que estamos pasando para ser usado,asi solito llega de forma de string si quiero q llegue tipo number coloco un + delante del req.params */