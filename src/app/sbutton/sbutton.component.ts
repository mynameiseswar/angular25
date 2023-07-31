import { Component, EventEmitter, Input, Output } from '@angular/core';


export interface IButton{
    title: string;
    class: string;
    action?: string;
}

@Component({
  selector: 'app-sbutton',
  templateUrl: './sbutton.component.html',
  styleUrls: ['./sbutton.component.scss']
})
export class SbuttonComponent {

  // @Input() buttonTitle: string = '';
  // @Input() buttonClass: string = '';


  @Input() buttonConfiguration: IButton ={
    title: '',
    class : '',
    action: ''
  };

  @Output() sButtonClick = new EventEmitter<string>();

  buttonClick(){
    this.sButtonClick.emit(this.buttonConfiguration.action);
  }
}
