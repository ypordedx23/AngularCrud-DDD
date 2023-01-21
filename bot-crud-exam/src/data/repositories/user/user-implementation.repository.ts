import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserEntity } from './entities/user-entity';
import { UserImplementationRepositoryMapper } from './mappers/user-repository.mapper';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { UserModel } from 'src/domain/models/user.model';
import { AppSettings } from 'src/base/appsettings';


@Injectable({
    providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {
    userMapper = new UserImplementationRepositoryMapper();
    constructor(private http: HttpClient) {
        super();
    }

    login(params: {username: string, password: string}): Observable<UserModel> {
        return this.http
            .post<UserEntity>(AppSettings.API_ENDPOINT+AppSettings.LOGIN_PATH, {params})
            .pipe(map(this.userMapper.mapFrom));
    }

}