import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nuts',
  templateUrl: './nuts.component.html',
  styleUrls: ['./nuts.component.css']
})
export class NutsComponent implements OnInit {

  nutName = " ";
  nutCreated = false;
  addNewNut = false;
  nutStatus = " Audrey : What ??? no nut here!";
  nuts = []

  constructor() { 
    setTimeout(()=> {
      this.addNewNut = true;
    },2000);

    // why is this in the constructor
  }

  ngOnInit(): void {
  }

  // ngOnInit is a life cycle hook called by Angular to indicate that Angular is done creating the component.

   
  handleUpdateName(event: Event){
    this.nutName = (<HTMLInputElement>event.target).value;
  }

  // the casting is to inform TypeScript that the type is an the html element

  handleAddNut(){
    this.nutCreated = true;
    this.nuts.push(this.nutName, new Date());
    console.log (this.nuts)
    this.nutStatus = "Audrey : Thanks, is this a " + this.nutName + " ?";
  }



}
