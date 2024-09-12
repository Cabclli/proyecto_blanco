import { NextApiRequest, NextApiResponse } from "next"

export const handle = (req:NextApiRequest, res:NextApiResponse
) => {
    const method = req.method;
    const componentes = [{
        componente: "Memoria RAM",
        precio: "50 USD",
        imagen: "url-de-la-imagen-ram.jpg"
      },
      {
        componente: "Tarjeta Gráfica",
        precio: "300 USD",
        imagen: "url-de-la-imagen-gpu.jpg"
      },
      {
        componente: "Disco Duro SSD",
        precio: "100 USD",
        imagen: "url-de-la-imagen-ssd.jpg"},
      
      {
        componente: "Memoria RAM",
        precio: "50 USD",
        imagen: "url-de-la-imagen-ram.jpg"
      },
      {
        componente: "Tarjeta Gráfica",
        precio: "300 USD",
        imagen: "url-de-la-imagen-gpu.jpg"
      },
      {
        componente: "Disco Duro SSD",
        precio: "100 USD",
        imagen: "url-de-la-imagen-ssd.jpg"
      }]
    console.log("esto es el servidor")
    return res.status(200).json({componentes} )
}
export default handle