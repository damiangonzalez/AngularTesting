import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  getContent(): Observable<string> {
    const val = "some real life string value from service";
    return of(val);;
  }

  constructor() { }
}
