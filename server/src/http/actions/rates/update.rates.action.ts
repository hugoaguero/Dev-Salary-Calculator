import { Request, Response } from "express";
import UpdateRateCommand from "../../../application/commands/rate/update.rate.command";
import UpdateRateHandler from "../../../application/handlers/rate/update.rate.handler";

class UpdateRateAction {
    async run(req: Request, res: Response) {
        const command: UpdateRateCommand = new UpdateRateCommand (
            req.body.id,
            req.body.technologyId,
            req.body.seniority,
            req.body.language,
            req.body.average_salary,
            req.body.gross_margin,
            req.body.currency
        );

        try {
            await UpdateRateHandler.execute(command);
        } catch(error) {
            console.info(error);
            return res.status(404).json({
                message: error
            });
        }

        return res.status(200).json({
            message: "Rate updated"
        });
    }
}

export default new UpdateRateAction();