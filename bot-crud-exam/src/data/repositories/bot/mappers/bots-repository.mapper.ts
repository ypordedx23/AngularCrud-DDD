import { Mapper } from 'src/base/mapper';
import { BotModel } from 'src/domain/models/bot.model';
import { BotEntity } from '../entities/bot-entity';


export class BotsImplementationRepositoryMapper extends Mapper<BotEntity[], BotModel[]> {
    mapFrom(param: BotEntity[]): BotModel[] {
        let bots: BotModel[];
        bots = [];
        for (let i = 0; i < param.length; i++) {
            let bot: BotModel = {
                _id: '',
                name: '',
                type: '',
                active: false,
                status: '',
                questions: []
            };
            bot._id= param[i]._id,
            bot.name= param[i].name,
            bot.type = param[i].type,
            bot.active= param[i].active,
            bot.status= param[i].status,
            bot.createdAt= param[i].createdAt,
            bot.questions= param[i].questions
            bots.push(bot);
        }
        return bots;
    }
    mapTo(param: BotModel[]): BotEntity[] {
        let bots: BotEntity[];
        bots = [];
        for (let i = 0; i < param.length; i++) {
            let bot: BotEntity = {
                _id: '',
                name: '',
                type: '',
                active: false,
                status: '',
                questions: []
            };
            bot._id= param[i]._id,
            bot.name= param[i].name,
            bot.type = param[i].type,
            bot.active= param[i].active,
            bot.status= param[i].status,
            bot.createdAt= param[i].createdAt,
            bot.questions= param[i].questions
            bots.push(bot);
        }
        return bots;
    }
}