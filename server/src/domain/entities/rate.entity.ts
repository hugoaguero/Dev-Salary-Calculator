import shortid from "shortid";
import Technology from "./technology.entity";
import SeniorityEnum from "../enums/seniority.enum";
import LanguageEnum from "../enums/language.enum";

class Rate {
  private id: string;
  private technology: Technology;
  private seniority: SeniorityEnum;
  private language: LanguageEnum;
  private average_salary: string;
  private gross_margin: string;
  private currency: string;

  constructor(
    technology: Technology,
    seniority: SeniorityEnum,
    language: LanguageEnum,
    average_salary: string,
    gross_margin: string,
    currency: string) 
  {
    this.id = shortid.generate();
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
  public setAverageSalary(value: string){
    this.average_salary = value;
  }
  public getGrossMargin(): string {
    return this.gross_margin;
  }
  public setGrossMargin(value: string){
    this.gross_margin = value;
  }
  public getCurrency(): string {
    return this.currency;
  }

  public total(): string {
    const result: number = parseFloat(this.gross_margin) + parseFloat(this.average_salary);
    return result.toString();
  }

  public percentage(): string {
    const result: number = parseFloat(this.gross_margin) / parseFloat(this.total());
    return result.toString();
  }
}

export default Rate;
