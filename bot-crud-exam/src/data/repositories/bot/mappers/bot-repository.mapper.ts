import { Mapper } from 'src/base/mapper';
import { BotModel } from 'src/domain/models/bot.model';
import { BotEntity } from '../entities/bot-entity';


export class BotImplementationRepositoryMapper extends Mapper<BotEntity, BotModel> {
    mapFrom(param: BotEntity): BotModel {
        return {
            _id: param._id,
            name: param.name,
            type: param.type,
            active: param.active,
            status: param.status,
            createdAt: param.createdAt,
            questions: param.questions
        };
    }
    mapTo(param: BotModel): BotEntity {
        return {
            _id: param._id,
            name: param.name,
            type: param.type,
            active: param.active,
            status: param.status,
            createdAt: param.createdAt,
            questions: param.questions
        }
    }
}