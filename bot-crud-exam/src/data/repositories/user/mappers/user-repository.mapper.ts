import { Mapper } from 'src/base/mapper';
import { UserModel } from 'src/domain/models/user.model';
import { UserEntity } from '../entities/user-entity';


export class UserImplementationRepositoryMapper extends Mapper<UserEntity, UserModel> {
    mapFrom(param: UserEntity): UserModel {
        return {
            _id: param._id,
            name: param.name,
            lastname: param.lastname,
            username: param.username,
            email: param.email,
            status: param.status,
            createdAt: param.createdAt,
            role: param.role
        };
    }
    mapTo(param: UserModel): UserEntity {
        return {
            _id: param._id,
            name: param.name,
            lastname: param.lastname,
            username: param.username,
            email: param.email,
            status: param.status,
            createdAt: param.createdAt,
            role: param.role
        }
    }
}