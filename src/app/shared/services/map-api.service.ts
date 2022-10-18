import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class MapApiService {

  constructor(private http: HttpClient) { }

  public url = 'https://maps.googleapis.com/maps/api/js?key=';
  public apiKey = 'AIzaSyAauNOssUm5MfP0c-XEtZQNKdKBmadJK60';

  public loadApi(): Observable<boolean> {
    const apiUrl = this.url + this.apiKey;
    return this.http.jsonp<boolean>(apiUrl, 'callback').pipe(
      map(() => true),
      catchError(() => of(false)),
    );
  }
}
