import { Request, Response } from "express";
import Technology from "../../../domain/entities/technology.entity";
import TechnologyRepository from "../../../infrastructure/repositories/technology.repository";

class ListTechnologyAction {
    async run(_req: Request, res: Response) {
        const technology: Technology[] = await TechnologyRepository.findAll();

        return res.status(200).json(technology);
    }
}

export default new ListTechnologyAction();