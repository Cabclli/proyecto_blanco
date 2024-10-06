import { NextApiRequest, NextApiResponse } from "next";
import { obtenerOfertas } from "../ofertas"; // Ajusta la ruta según tu estructura

export const handle = (req: NextApiRequest, res: NextApiResponse) => {
  // Asegúrate de que el método HTTP sea GET
  if (req.method === "GET") {
    try {
      // Obtén los datos de la función obtenerOfertas del archivo ofertas.ts
      const componentes = obtenerOfertas();
      
      // Devuelve los datos como respuesta
      return res.status(200).json({ componentes });
    } catch (error) {
      // Si ocurre algún error, devuelve un estado de error
      return res.status(500).json({ mensaje: "Error al obtener las ofertas" });
    }
  } else {
    // Si el método no es GET, devuelve un error 405 (Método no permitido)
    return res.status(405).json({ mensaje: "Método no permitido" });
  }
};

export default handle;
