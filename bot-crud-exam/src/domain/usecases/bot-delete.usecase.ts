import { Observable } from 'rxjs';
import { UseCase } from '../base/usecase';
import { BotModel } from '../models/bot.model';
import { BotRepository } from '../repositories/bot.repository';

export class BotDeleteUseCase implements UseCase<{ botId: string }, BotModel> {
    constructor(private botRepository: BotRepository) { }
    execute(
       params: { botId: string },
    ): Observable<BotModel> {
        return this.botRepository.deleteBotById(params);
    }
}