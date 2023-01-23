import { Observable } from 'rxjs';
import { BotEntity } from 'src/data/repositories/bot/entities/bot-entity';
import { UseCase } from '../base/usecase';
import { BotModel } from '../models/bot.model';
import { BotRepository } from '../repositories/bot.repository';

export class BotSearchUseCase implements UseCase<BotEntity , BotModel> {
    constructor(private botRepository: BotRepository) { }
    execute( 
        params: BotModel,
        _id: string
    ): Observable<BotModel> {
        return this.botRepository.getBotById(_id);
    }
}