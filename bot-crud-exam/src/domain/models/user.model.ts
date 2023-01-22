export interface UserModel {
    _id: string;
    name: string;
    lastname: string;
    username: string;
    password: string,
    email: string;
    status: boolean;
    createdAt?: Date;
    role: string[];
}