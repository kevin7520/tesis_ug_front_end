import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ui-kaas-input',
  templateUrl: './ui-kaas-input.component.html',
  styleUrls: ['./ui-kaas-input.component.scss']
})
export class UiKaasInputComponent implements OnInit {

  @Input() characterFilter : 'num' | 'letra' | 'all' | any = 'all';
  @Input() label : string = "";
  @Input() hint : string = "";
  @Input() placeholder : string = "";
  @Input() value : string = "";
  @Output() valueChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  blockEvent(event: KeyboardEvent) {
    if(this.characterFilter != 'all'){
      const patternMap: Record<typeof this.characterFilter, string> = {
        'num': '/[0-9]/',
        'letra': 'AAAAA',
        'all': '*****',
      };
      
      const pattern = patternMap[this.characterFilter] || this.characterFilter;
      const inputChar = String.fromCharCode(event.charCode);
      if (!pattern.test(inputChar)) {
          event.preventDefault();
      }
    }
  }

  onInputChange() {
    this.valueChange.emit(this.value);
  }

} 
