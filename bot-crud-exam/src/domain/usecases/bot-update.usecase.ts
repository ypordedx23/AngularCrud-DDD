import { Observable } from 'rxjs';
import { UseCase } from '../base/usecase';
import { BotModel } from '../models/bot.model';
import { BotRepository } from '../repositories/bot.repository';

export class BotUpdateUseCase implements UseCase<{ name: string, type:string, status: string, active: boolean }, BotModel> {
    constructor(private botRepository: BotRepository) { }
    execute(
       params: { name: string, type:string, status: string, active: boolean },
    ): Observable<BotModel> {
        return this.botRepository.updateBot(params);
    }
}