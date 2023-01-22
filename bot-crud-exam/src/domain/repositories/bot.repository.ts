import { Observable } from 'rxjs';
import { BotEntity } from 'src/data/repositories/bot/entities/bot-entity';
import { BotModel } from '../models/bot.model';


export abstract class BotRepository {
    abstract createBot(params: {name: string, type:string, status: string}): Observable<BotModel>;
    abstract getBots(): Observable<BotModel[]>;
    abstract getBotById(botId: string): Observable<BotModel>;
    abstract deleteBotById(botId: string): Observable<BotModel>;
    abstract updateBot(_id: string, params: BotEntity): Observable<BotModel>;
}