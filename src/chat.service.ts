import * as io from 'socket.io-client';

export class ChatService {
  private url = 'http://localhost:4200'
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  sendMessage(message) {
    this.socket.emit('new-message', message);
  }
}