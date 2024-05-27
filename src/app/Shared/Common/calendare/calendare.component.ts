import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './calendare.component.html',
  styleUrls: ['./calendare.component.scss']
})
export class CalendareComponent implements OnInit {

  @Input() label : string = "";
  @Input() hint : string = "";
  @Input() value! : Date;
  @Output() valueChange = new EventEmitter<Date>();
  constructor() { }

  ngOnInit() {
  }

  change(event:any){
    this.valueChange.emit(this.value);
  }
}
