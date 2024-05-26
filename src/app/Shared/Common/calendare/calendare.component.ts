import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './calendare.component.html',
  styleUrls: ['./calendare.component.scss']
})
export class CalendareComponent implements OnInit {

  @Input() label : string = "";
  @Input() hint : string = "";
  @Input() value! : Date;

  constructor() { }

  ngOnInit() {
  }

}
