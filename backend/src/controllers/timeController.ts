import { Request, Response } from "express";
import knex from "../database/connection";

class TimeController {
    async index(request: Request, response: Response) {
        const times = await knex("time").select("*");

        const timesSerializados = times.map(time => {
            return {
                id: time.id,
                nome: time.nome,
            };
        });

        return response.json(timesSerializados);
    }

    // show

    // create

    // update

    // delete
}

export default TimeController;
