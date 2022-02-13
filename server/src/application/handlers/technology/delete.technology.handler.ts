import TechnologyRepository from "../../../infrastructure/repositories/technology.repository";
import {DeleteTechnologyCommand} from "../../commands/technology/delete.technology.command";

class DeleteTechnologyHandler {
    async execute(command: DeleteTechnologyCommand) {
        const technology = await TechnologyRepository.findOneById(command.id);

        if (!technology) {
            throw new Error('technology not found');
        }

        await TechnologyRepository.deleteById(command.id);
    }
}

export default new DeleteTechnologyHandler();