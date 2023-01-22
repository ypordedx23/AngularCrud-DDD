import { UserModel } from "src/domain/models/user.model";

export interface UserEntity {
    user: UserModel;
    token: string;
}