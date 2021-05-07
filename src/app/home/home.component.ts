import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket/socket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private socketService: SocketService
  ) {}

  ngOnInit(): void {}

  sendMessage(data){
    this.socketService.sendMessage(data);
  }

}
