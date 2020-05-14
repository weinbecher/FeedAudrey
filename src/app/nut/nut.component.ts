import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nut',
  templateUrl: './nut.component.html',
  styleUrls: ['./nut.component.css']
})
export class NutComponent implements OnInit {
  nutNumber: number = Math.floor(Math.random() * 100);
  feeling: string = 'hate';

  constructor() {
    this.feeling = Math.random() > 0.5 ? 'love 💕' : 'hate 😡';
   }


  ngOnInit(): void {
  }

  getColor() {
    return (this.feeling === 'love 💕' ? 'red' : 'black');

  }


}
