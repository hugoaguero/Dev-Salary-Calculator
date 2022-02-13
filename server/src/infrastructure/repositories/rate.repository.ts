import Rate from "../../domain/entities/rate.entity";
import LanguageEnum from "../../domain/enums/language.enum";
import SeniorityEnum from "../../domain/enums/seniority.enum";

class RateRepository {
    private rates: Rate[];

    constructor() {
        this.rates = [];
    }
    async findAll(): Promise<Rate[]> {
        return this.rates;
    }

    async save(rate: Rate): Promise<void> {
            this.rates.push(rate);
    }

    async update(rate: Rate): Promise<void> {
        this.rates = this.rates.map(function(r) {
            return r.getId() === rate.getId() ? rate : r;
        });
    }

    async deleteById(id: string): Promise<void> {
        this.rates = this.rates.filter(u => u.getId() !== id);
    }

    async findOneById(id: string): Promise<Rate | null> {
        const rate = this.rates.find(r => r.getId() === id);

        return (rate) ? rate : null;
    }

    async findOneBySeniority(seniority: SeniorityEnum): Promise<Rate | null> {
        const rate = this.rates.find(t => t.getSeniority() === seniority);

        return (rate) ? rate : null;
    }
    async findAllBy(technologyIds?: string[],
        seniority?: string,
        language?: string,
        currency?: string): Promise<Rate[]>{
        
            let query = this.rates;

        if(technologyIds){
            query = query.filter(u => technologyIds.includes(u.getTechnology().getId()))
        }

        if(seniority){
            query = query.filter(u => seniority.includes(u.getSeniority().toString()))
        }
        
        if(language){
            query = query.filter(u => language.includes(u.getLanguage().toString()))
        }

        if(currency){
            query = query.filter(u => currency.includes(u.getCurrency().toString()))
        }

        return query;
    } 

    async exists(technologyId: string, seniority: SeniorityEnum,
        LanguageEnum: LanguageEnum, currency: string ): Promise<boolean>{

        return  this.rates.some(r => r.getSeniority() == seniority 
        &&  r.getLanguage() == LanguageEnum
        && r.getCurrency() == currency
        && r.getTechnology().getId() == technologyId);
    }

}

export default new RateRepository();