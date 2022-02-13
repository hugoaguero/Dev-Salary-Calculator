import LanguageEnum from "../../../domain/enums/language.enum";
import SeniorityEnum from "../../../domain/enums/seniority.enum";

export class CreateRateCommand {
    private technologyId: string;
    private seniority: SeniorityEnum;
    private language: LanguageEnum;
    private average_salary: string;
    private gross_margin: string;
    private currency: string;

    constructor(
        technologyId: string,
        seniority: SeniorityEnum,
        language: LanguageEnum,
        average_salary: string,
        gross_margin: string,
        currency: string) {
        this.technologyId = technologyId;
        this.seniority = seniority;
        this.language = language;
        this.average_salary = average_salary;
        this.gross_margin = gross_margin;
        this.currency = currency;
    }

    public getTechnologyId(): string {
        return this.technologyId;
    }
    public getSeniority(): SeniorityEnum {
        return this.seniority;
    }

    public getLanguage(): LanguageEnum {
        return this.language;
    }
    public getAverageSalary(): string {
        return this.average_salary;
    }
    public getGrossMargin(): string {
        return this.gross_margin;
    }
    public getCurrency(): string {
        return this.currency;
    }

}

export default CreateRateCommand;