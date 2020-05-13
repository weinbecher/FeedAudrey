import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nut',
  templateUrl: './nut.component.html',
  styleUrls: ['./nut.component.css']
})
export class NutComponent implements OnInit {
  nutNumber: number = Math.floor(Math.random()*100);
  fondLevel: string = 'hate';

  constructor() {
    this.fondLevel = Math.random() > 0.5 ? 'love 💕' : "hate 😡";
   }


  ngOnInit(): void {
  }

  getColor(){
    return this.fondLevel === "love" ? "pink" : "red";

  }


}
