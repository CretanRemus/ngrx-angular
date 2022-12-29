import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private httpClient: HttpClient) {}

  public getTimestamp() {
    const url = 'http://worldtimeapi.org/api/timezone/Europe/Bucharest'

    return this.httpClient.get(url);
  }
}
