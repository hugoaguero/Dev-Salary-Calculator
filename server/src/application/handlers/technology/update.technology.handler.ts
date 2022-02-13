import UpdateTechnologyCommand from "../../commands/technology/update.technology.command";
import technologyRepository from "../../../infrastructure/repositories/technology.repository";

class UpdateTechnologyHandler {
    async execute(command: UpdateTechnologyCommand) {
        const technology = await technologyRepository.findOneById(command.getId());

        if (!technology) {
            throw new Error('Technology not found');
        }
        else {
            
            technology.setName(command.getName());
            await technologyRepository.update(technology);
        }
    }
}

export default new UpdateTechnologyHandler();