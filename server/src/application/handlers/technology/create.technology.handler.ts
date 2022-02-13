import Technology from "../../../domain/entities/technology.entity";
import CreateTechnologyCommand from "../../commands/technology/create.technology.command";
import TechnologyRepository from "../../../infrastructure/repositories/technology.repository";

class CreateTechnologyHandler {

    async execute(command: CreateTechnologyCommand) {

 
        if (await TechnologyRepository.findOneByName(command.getName())) {
            throw new Error('Technology not found');
        }
        const technology: Technology = new Technology(command.getName());

        await TechnologyRepository.save(technology);
    }
}

export default new CreateTechnologyHandler();