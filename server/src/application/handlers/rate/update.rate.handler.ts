import UpdateRateCommand from "../commands/update.rate.command";
import RateRepository from "../../infrastructure/repositories/rate.repository";

class UpdateRateHandler {
    async execute(command: UpdateRateCommand) {
        const rate = await RateRepository.findOneById(command.getId());

        if (!rate) {
            throw new Error('Rate not found');
        }
        else {
            rate.setAverageSalary(command.getAverageSalary());
            rate.setGrossMargin(command.getGrossMargin());

            await RateRepository.update(rate);
        }
    }
}

export default new UpdateRateHandler();