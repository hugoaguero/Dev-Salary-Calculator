import Technology from "../../domain/entities/technology.entity"
import LanguageEnum from "../../domain/enums/language.enum";
import SeniorityEnum from "../../domain/enums/seniority.enum";


class UpdateRateCommand {
  private id: string;
  private technology: Technology;
  private seniority: SeniorityEnum;
  private language: LanguageEnum;
  private average_salary: string;
  private gross_margin: string;
  private currency: string;

  constructor(id: string,
    technology: Technology,
    seniority: SeniorityEnum,
    language: LanguageEnum,
    average_salary: string,
    gross_margin: string,
    currency: string) 
  {
    this.id = id;
    this.technology = technology;
    this.seniority = seniority;
    this.language = language;
    this.average_salary = average_salary;
    this.gross_margin = gross_margin;
    this.currency = currency;
  }

  public getId(): string {
    return this.id;
  }
  public getSeniority(): SeniorityEnum {
    return this.seniority;
  }
  public getTechnology(): Technology {
    return this.technology;
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

export default UpdateRateCommand;
