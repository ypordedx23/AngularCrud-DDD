import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BotEntity } from './entities/bot-entity';
import { BotImplementationRepositoryMapper } from './mappers/bot-repository.mapper';
import { BotRepository } from 'src/domain/repositories/bot.repository';
import { BotModel } from 'src/domain/models/bot.model';
import { AppSettings } from 'src/base/appsettings';


@Injectable({
    providedIn: 'root',
})
export class BotImplementationRepository extends BotRepository {
    botMapper = new BotImplementationRepositoryMapper();
    constructor(private http: HttpClient) {
        super();
    }

    createBot(params: {name: string, type:string, status: string}): Observable<BotModel> {
        return this.http
            .post<BotEntity>(AppSettings.API_ENDPOINT+AppSettings.BOT_PATH, {params})
            .pipe(map(this.botMapper.mapFrom));
    }

    getBots(): Observable<BotModel> {
        return this.http
            .get<BotEntity>(AppSettings.API_ENDPOINT+AppSettings.BOT_PATH)
            .pipe(map(this.botMapper.mapFrom));
    }

    getBotById(params: {botId: string}): Observable<BotModel> {
        return this.http
            .get<BotEntity>(AppSettings.API_ENDPOINT+AppSettings.BOT_PATH+'/'+params.botId)
            .pipe(map(this.botMapper.mapFrom));
    }

    deleteBotById(params: {botId: string}): Observable<BotModel> {
        return this.http
            .delete<BotEntity>(AppSettings.API_ENDPOINT+AppSettings.BOT_PATH+'/'+params.botId)
            .pipe(map(this.botMapper.mapFrom));
    }

    updateBot(params: {botId: string, name: string, type:string, status: string, active: boolean}): Observable<BotModel> {
        return this.http
            .patch<BotEntity>(AppSettings.API_ENDPOINT+AppSettings.BOT_PATH+'/'+params.botId, {params})
            .pipe(map(this.botMapper.mapFrom));
    }
}