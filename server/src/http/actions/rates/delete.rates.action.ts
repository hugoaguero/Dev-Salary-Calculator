import { Request, Response } from "express";
import { DeleteRateCommand } from "../../../application/commands/rate/delete.rate.command";
import DeleteRateHandler from "../../../application/handlers/rate/delete.rate.handler"

class DeleteRateAction {
    async run(req: Request, res: Response) {
        const command: DeleteRateCommand = {
            id: req.params.id,
        };

        try {
            await DeleteRateHandler.execute(command);
        } catch(error) {
            return res.status(404).json({
                message: error
            })
        }

        return res.status(204).send();
    }
}

export default new DeleteRateAction();