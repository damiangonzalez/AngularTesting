import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageSpyService {
  getContent(): Observable<string> {
    const val = "some real life string value from service";
    return of(val);;
  }

  constructor() { }
}
