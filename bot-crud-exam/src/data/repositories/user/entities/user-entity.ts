export interface UserEntity {
    _id: string;
    name: string;
    lastname: string;
    username: string;
    email?: string;
    status: boolean;
    createdAt?: Date;
    role: string[];
}