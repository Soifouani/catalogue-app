import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {ActionEvent} from "../models/actionEvent";

@Injectable({
  providedIn: 'root'
})
export class EventDriverService {
  sourceEventSubject: Subject<ActionEvent> = new Subject<ActionEvent>();
  sourceEventSubjectObservable =this.sourceEventSubject.asObservable();

  constructor() { }

  publishEvent(event: ActionEvent) {
    this.sourceEventSubject.next(event);
  }
}
