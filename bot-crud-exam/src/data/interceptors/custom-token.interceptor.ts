import { Injectable } from '@angular/core';
import { AppSettings } from 'src/base/app-settings';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomTokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const localToken = localStorage.getItem(AppSettings.TOKEN_KEY);
    request = request.clone({headers: request.headers.set('Authorization', 'bearer '+localToken)});
    return next.handle(request);
  }
}
