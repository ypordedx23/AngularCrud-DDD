import { Observable } from 'rxjs';
import { LoginModel } from '../models/login.model';
import { UserModel } from '../models/user.model';


export abstract class UserRepository {
    abstract login(params: {username: string, password: string}): Observable<LoginModel>;
}