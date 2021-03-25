import express from "express";

import UsuarioController from './controllers/usuarioController';
import TimeController from "./controllers/timeController";

const routes = express.Router();
const usuarioController = new UsuarioController();
const timeController = new TimeController();

routes.get("/time", timeController.index);

routes.post("/usuario", usuarioController.create);

// routes.get("/users/:id", (request, response) => {
// 	const id = Number(request.params.id);

// 	response.json({ message: `Não foi encontrado usuário com o id: ${id}`});
// });

// routes.post("/users", (request, response) => {
// 	const bodyRequest = request.body;

// 	response.json(bodyRequest);
// });

export default routes;