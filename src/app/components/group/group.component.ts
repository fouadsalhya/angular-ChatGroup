import { AuthService } from './../../services/auth.service';
import { Message } from './../../model/message';
import { MessageService } from './../../services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  messages:Message[]=[];
  messsages:Message[]=[]
  message:Message = {
    name:'fouad',
    body:'',
    user:''
  }
  constructor(
               private messageService:MessageService,
               private authService:AuthService
               ) { }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth => {
      this.message.user = auth?.uid;
      console.log(this.message.user)
      this.messageService.getAll(this.message.user).subscribe(message => {
        this.messages = message ;
        console.log(this.messages)
      })
    })
    this.messageService.getAlll().subscribe(messsage => {
      this.messsages = messsage
      console.log(this.messsages)
    })
   
  }

  AddMessage() {
     this.messageService.addMessage(this.message)
     this.message = {
      name:'',
      body:''
     }
  }

  DeleteMessage(id: any) {
    this.messageService.deleteMessage(id);
  }

}
