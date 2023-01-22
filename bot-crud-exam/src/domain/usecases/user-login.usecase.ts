import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../base/usecase';
import { LoginModel } from '../models/login.model';
import { UserModel } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';


export class UserLoginUseCase implements UseCase<{ username: string; password: string }, LoginModel> {
    constructor(private userRepository: UserRepository) { }
    execute(
       params: { username: string, password: string },
    ): Observable<LoginModel> {
        return this.userRepository.login(params);
    }
}