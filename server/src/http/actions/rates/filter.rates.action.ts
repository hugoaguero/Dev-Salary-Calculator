import { Request, Response } from "express";
import Rate  from "../../../domain/entities/rate.entity";
import RateRepository from "../../../infrastructure/repositories/rate.repository";

class FilterRatesAction {
    async run(req: Request, res: Response) {
        const rates: Rate[] = await RateRepository.findAllBy(
            req.body.technologyId,
            req.body.seniority,
            req.body.language,
            req.body.currency
        );

        return res.status(200).json(rates);
    }
}

export default new FilterRatesAction();