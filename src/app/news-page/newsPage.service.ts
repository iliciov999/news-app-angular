import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class NewsPageService {
  private dataValue = 'https://lenta.ru/rss/top7';
  constructor(private http: HttpClient) {
  }

  GetRssFeedData() {
    const requestOptions: object = {
      observe: 'body',
      responseType: 'text'
    };
    return this.http.get<any>(this.dataValue, requestOptions);
  }
}
