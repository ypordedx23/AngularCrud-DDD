import { Mapper } from 'src/base/mapper';
import { LoginModel } from 'src/domain/models/login.model';
import { UserModel } from 'src/domain/models/user.model';
import { UserEntity } from '../entities/user-entity';


export class UserImplementationRepositoryMapper extends Mapper<UserEntity, LoginModel> {
    mapFrom(param: UserEntity): LoginModel {
        return {
            user:param.user,
            token: param.token
        };
    }
    mapTo(param: LoginModel): UserEntity {
        return {
            user: param.user,
            token: param.token
        }
    }
}