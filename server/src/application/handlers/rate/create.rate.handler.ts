import Rate from "../../../domain/entities/rate.entity";
import CreateRateCommand from "../../commands/rate/create.rate.command";
import technologyRepository from "../../../infrastructure/repositories/technology.repository";
import rateRepository from "../../../infrastructure/repositories/rate.repository";

class CreateRateHandler {
    async execute(command: CreateRateCommand) {
        const technology = await technologyRepository.findOneById(command.getTechnologyId());

        if (!technology) {
            throw new Error('Technology not found');
        }

        const exists = await rateRepository.exists(
            command.getTechnologyId(),
            command.getSeniority(),
            command.getLanguage(),
            command.getCurrency()
            );

        if(exists){
            throw new Error('Rate is already created');
        }
        const rate: Rate = new Rate(technology, 
            command.getSeniority(),
            command.getLanguage(),
            command.getAverageSalary(),
            command.getGrossMargin(),
            command.getCurrency()
            );

        await RateRepository.save(rate);
    }
}

export default new CreateRateHandler();