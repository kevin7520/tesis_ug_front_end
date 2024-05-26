import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {
  
  @Input() label : string = "";
  @Input() hint : string = "";
  @Input() options : any[] = [];
  @Input() value! : string;
  
  constructor() { }

  ngOnInit() {
  }

  onValueChange(value: string) {
    this.value = value;
  }

}
