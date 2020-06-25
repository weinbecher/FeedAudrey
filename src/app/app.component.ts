import { ChatService } from './chat.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'audrey-has-big-bum';
  chats: {audrey: string[],  humanChoice: string[]} [] = [];
  audreyChat: string;
  constructor(private chatService: ChatService) {}
  ngOnInit() {
    this.chats = this.chatService.chats ;
    this.audreyChat = this.chats[0].audrey[0];
  }

  // audreyChat() {
  //   //  return this.chatService.printAudreyChat[1];
  //   return this.chats[0].audrey[0];
  // }

//   var obj = { first: 'someVal' };
// obj[Object.keys(obj)[0]]; //returns 'someVal'

}


