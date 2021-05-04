import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { HttpLoaderService } from '../services/http-loader.service';

@Injectable({
  providedIn: 'root'
})
export class HttpLoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: HttpLoaderService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.isLoading$.next(true);

    return next.handle(request).pipe(
      finalize(() => {
        this.loaderService.isLoading$.next(false);
      })
    );
  }
}
