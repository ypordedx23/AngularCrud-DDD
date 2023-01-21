import { Observable } from 'rxjs';
import { UseCase } from '../base/usecase';
import { BotModel } from '../models/bot.model';
import { BotRepository } from '../repositories/bot.repository';

export class BotRegisterUseCase implements UseCase<{ name: string, type:string, status: string }, BotModel> {
    constructor(private botRepository: BotRepository) { }
    execute(
       params: {name: string, type:string, status: string },
    ): Observable<BotModel> {
        return this.botRepository.createBot(params);
    }
}