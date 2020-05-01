import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.scss']
})
export class AlertButtonComponent implements OnInit {

  content = "this is the message";
  hideContent = true;
  severity = 123;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.hideContent = !this.hideContent;
  }
}
