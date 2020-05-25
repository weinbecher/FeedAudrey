import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'human-name',
  templateUrl: './human-name.component.html',
  styleUrls: ['./human-name.component.css']
})
export class HumanNameComponent implements OnInit {
  name = '';
  humanName = '';
  isDisplayed = true;

  @Output() humanCreated = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddHuman(humanNameInput: HTMLInputElement) {
    this.humanName =  humanNameInput.value;
    this.humanCreated.emit(this.humanName);
    this.isDisplayed = false;
  }

  showMe() {
     this.isDisplayed = false;
  }

}
