import { Observable } from 'rxjs';
import { UseCase } from '../base/usecase';
import { BotModel } from '../models/bot.model';
import { BotRepository } from '../repositories/bot.repository';

export class BotListUseCase implements UseCase<void, BotModel> {
    constructor(private botRepository: BotRepository) { }
    execute(): Observable<BotModel> {
        return this.botRepository.getBots();
    }
}