class UpdateTechnologyCommand {
    private id: string;
    private name: string;

    constructor(name: string, id: string) {
        this.id = id;
        this.name = name;
    }

    public getId(): string {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
}

export default UpdateTechnologyCommand;
