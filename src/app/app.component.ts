import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string;
  messages: any;

  constructor(private chatService: ChatService) {
    this.messages = ['hello']
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        this.messages.push(message);
        console.log(this.messages)
      });
  }
}
