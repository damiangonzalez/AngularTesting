import { Component, OnInit } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.scss']
})
export class AlertButtonComponent implements OnInit {
  textContent = "this is the message";
  observableContent: Observable<string>;
  hideContent = true;
  severity = 123;

  constructor(private msgService: MessageService) { }

  ngOnInit(): void {
    this.observableContent = this.msgService.getContent();
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
