import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export default class InputComponent { 

  @Input() type: string | undefined;
  @Input() placeholder: string | undefined;

  constructor() { }


}
