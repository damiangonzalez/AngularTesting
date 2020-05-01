import { Component, OnInit } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { MessageService } from '../message.service';
import { MessageSpyService } from '../message-spy.service';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.scss']
})
export class AlertButtonComponent implements OnInit {
  textContent = "this is the message";
  observableContentStub: Observable<string>;
  observableContentSpy: Observable<string>;
  hideContent = true;
  severity = 123;

  constructor(
    private msgServiceStub: MessageService,
    private msgServiceSpy: MessageSpyService) { }

  ngOnInit(): void {
    this.observableContentStub = this.msgServiceStub.getContent();
    this.observableContentSpy = this.msgServiceSpy.getContent();
  }

  toggle() {
    this.hideContent = !this.hideContent;
  }

  toggleAsync(){
    timer(500).subscribe(()=>{
      this.toggle();
    });
  }
}
