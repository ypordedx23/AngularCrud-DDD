export interface BotEntity {
    _id: string;
    name: string;
    type: string;
    active: boolean;
    status: string;
    createdAt?: Date;
    questions: string[];
}