import { Request, Response } from "express";
import knex from "../database/connection";

class UsuarioController {
    async create(request: Request, response: Response) {
        const { nome, timeId } = request.body;

        await knex("Usuario").insert({
            nome,
            timeId,
        });

        return response.json({ success: true });
    }

    // index

    // show

    // update

    // delete
}

export default UsuarioController;
