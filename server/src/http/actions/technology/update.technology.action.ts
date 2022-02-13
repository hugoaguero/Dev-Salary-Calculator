import { Request, Response } from "express";
import UpdateTechnologyCommand from "../../../application/commands/technology/update.technology.command";
import updateTechnologyHandler from "../../../application/handlers/technology/update.technology.handler";

class UpdateTechnologyAction {
    async run(req: Request, res: Response) {
        const command: UpdateTechnologyCommand = new UpdateTechnologyCommand (
            req.body.name,
            req.body.id,
        );

        try {
            await updateTechnologyHandler.execute(command);
        } catch(error) {
            console.info(error);
            return res.status(404).json({
                message: error
            });
        }

        return res.status(200).json({message: "Technology updated"});
    }
}

export default new UpdateTechnologyAction();