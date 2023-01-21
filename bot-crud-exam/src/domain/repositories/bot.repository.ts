import { Observable } from 'rxjs';
import { BotModel } from '../models/bot.model';


export abstract class BotRepository {
    abstract createBot(params: {name: string, type:string, status: string}): Observable<BotModel>;
    abstract getBots(): Observable<BotModel>;
    abstract getBotById(params: {botId: string}): Observable<BotModel>;
    abstract deleteBotById(params: {botId: string}): Observable<BotModel>;
    abstract updateBot(params: {botId: string, name: string, type:string, status: string, active: boolean}): Observable<BotModel>;
}