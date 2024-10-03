import { NextApiRequest, NextApiResponse } from "next"

export const handle = (req:NextApiRequest, res:NextApiResponse
) => {
    const method = req.method;
    console.log("esto es el servidor")
    return res.status(200).json({mensaje:"hola"} )
}
export default handle