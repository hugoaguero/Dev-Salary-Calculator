import rateRepository from "../../infrastructure/repositories/rate.repository";
import { DeleteRateCommand } from "../commands/delete.rate.command";

class DeleteRateHandler {
    async execute(command: DeleteRateCommand) {
        const rate = await rateRepository.findOneById(command.id);

        if (!rate) {
            throw new Error('Rate not found');
        }

        await rateRepository.deleteById(command.id);
    }
}

export default new DeleteRateHandler();