import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'human-name',
  templateUrl: './human-name.component.html',
  styleUrls: ['./human-name.component.css']
})
export class HumanNameComponent implements OnInit {
  @Output() humanCreated = new EventEmitter <{ humanName: string}>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddHuman(humanNameInput: HTMLInputElement) {
    console.log(humanNameInput.value);
    this.humanCreated.emit({
      humanName: humanNameInput.value
    });

  }

}
