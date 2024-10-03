import db from "../db"
export const inicializar = async () =>{
    await db.ofertas.create({data:{
        componente: "Memoria RAM", precio: "50 USD", img: "url-de-la-imagen-ram.jpg" ,
    }})
}
