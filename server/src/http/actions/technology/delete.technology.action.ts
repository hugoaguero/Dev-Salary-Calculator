import { Request, Response } from "express";
import DeleteTechnologyHandler from "../../../application/handlers/technology/delete.technology.handler";
import {DeleteTechnologyCommand} from "../../../application/commands/technology/delete.technology.command";

class DeleteTechnologyAction {
    async run(req: Request, res: Response) {
        const command: DeleteTechnologyCommand = {
            id: req.params.id,
        };

        try {
            await DeleteTechnologyHandler.execute(command);
        } catch (error) {
            return res.status(404).json({message: error})
        }

        return res.status(204).send();
    }
}

export default new DeleteTechnologyAction();