import { Observable } from 'rxjs';

export interface UseCase<S, T> {
    execute(params: S, id?: string): Observable<T>;
}