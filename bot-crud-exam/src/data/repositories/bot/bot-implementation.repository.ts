import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BotEntity } from './entities/bot-entity';
import { BotImplementationRepositoryMapper } from './mappers/bot-repository.mapper';
import { BotRepository } from 'src/domain/repositories/bot.repository';
import { BotModel } from 'src/domain/models/bot.model';
import { AppSettings } from 'src/base/app-settings';
import { BotsImplementationRepositoryMapper } from './mappers/bots-repository.mapper';


@Injectable({
    providedIn: 'root',
})
export class BotImplementationRepository extends BotRepository {
    botMapper = new BotImplementationRepositoryMapper();
    botsMapper = new BotsImplementationRepositoryMapper();
    constructor(private http: HttpClient) {
        super();
    }

    createBot(params: {name: string, type:string, status: string}): Observable<BotModel> {
        debugger
        return this.http
            .post<BotEntity>(AppSettings.API_ENDPOINT+AppSettings.BOT_PATH, params)
            .pipe(map(this.botMapper.mapFrom));
    }

    getBots(): Observable<BotModel[]> {
        return this.http
            .get<BotEntity[]>(AppSettings.API_ENDPOINT+AppSettings.BOT_PATH)
            .pipe(map(this.botsMapper.mapFrom));
    }

    getBotById(botId: string): Observable<BotModel> {
        return this.http
            .get<BotEntity>(AppSettings.API_ENDPOINT+AppSettings.BOT_PATH+'/'+botId)
            .pipe(map(this.botMapper.mapFrom));
    }

    deleteBotById(botId: string): Observable<BotModel> {
        return this.http
            .delete<BotEntity>(AppSettings.API_ENDPOINT+AppSettings.BOT_PATH+'/'+botId)
            .pipe(map(this.botMapper.mapFrom));
    }

    updateBot(_id: string, params:BotEntity): Observable<BotModel> {
        debugger
        console.log(params)
        return this.http
            .patch<BotEntity>(AppSettings.API_ENDPOINT+AppSettings.BOT_PATH+'/'+_id, params)
            .pipe(map(this.botMapper.mapFrom));
    }
}