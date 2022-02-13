import { Request, Response } from "express";
import CreateTechnologyCommand from "../../../application/commands/technology/create.technology.command";
import CreateTechnologyHandler from "../../../application/handlers/technology/create.technology.handler";

class CreateTechnologyAction {
    async run(req: Request, res: Response){
        const command: CreateTechnologyCommand = new CreateTechnologyCommand(
            req.body.name
        );

        if (!command.getName()) {
                return res.status(400).json({
                    message: "Required fields"
                })
        }
        try {
            await CreateTechnologyHandler.execute(command);
        } catch(error) {
            console.error(error);
            return res.status(404).json({
                message: `${error} | Existing technology`
            });
        }

        return res.status(201).json({
            message: "Technology created"
        });
    }
}

export default new CreateTechnologyAction();