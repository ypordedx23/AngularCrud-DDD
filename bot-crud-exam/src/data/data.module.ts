import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { BotRepository } from 'src/domain/repositories/bot.repository';
import { UserLoginUseCase } from 'src/domain/usecases/user-login.usecase';
import { BotDeleteUseCase } from 'src/domain/usecases/bot-delete.usecase';
import { BotRegisterUseCase } from 'src/domain/usecases/bot-register.usecas';
import { BotUpdateUseCase } from 'src/domain/usecases/bot-update.usecase';
import { BotSearchUseCase } from 'src/domain/usecases/bot-search.usecase';
import { BotListUseCase } from 'src/domain/usecases/bot-list.usecase';

const userLoginUseCaseFactory = 
(userRepo: UserRepository) => new UserLoginUseCase(userRepo);

export const userLoginUseCaseProvider = {
    provide: UserLoginUseCase,
    useFactory: userLoginUseCaseFactory,
    deps: [UserRepository],
};

const botRegisterUseCaseFactory = 
(botRepo: BotRepository) => new BotRegisterUseCase(botRepo);
export const botRegisterUseCaseProvider = {
    provide: BotRegisterUseCase,
    useFactory: botRegisterUseCaseFactory,
    deps: [BotRepository],
};

const botUpdateUseCaseFactory = 
(botRepo: BotRepository) => new BotUpdateUseCase(botRepo);
export const botUpdateUseCaseProvider = {
    provide: BotUpdateUseCase,
    useFactory: botUpdateUseCaseFactory,
    deps: [BotRepository],
};

const botSearchUseCaseFactory = 
(botRepo: BotRepository) => new BotSearchUseCase(botRepo);
export const botSearchUseCaseProvider = {
    provide: BotSearchUseCase,
    useFactory: botSearchUseCaseFactory,
    deps: [BotRepository],
};

const botListUseCaseFactory = 
(botRepo: BotRepository) => new BotListUseCase(botRepo);
export const botListUseCaseProvider = {
    provide: BotListUseCase,
    useFactory: botListUseCaseFactory,
    deps: [BotRepository],
};

const botDeleteUseCaseFactory = 
(botRepo: BotRepository) => new BotDeleteUseCase(botRepo);
export const botDeleteUseCaseProvider = {
    provide: BotDeleteUseCase,
    useFactory: botDeleteUseCaseFactory,
    deps: [BotRepository],
};


export class DataModule { }