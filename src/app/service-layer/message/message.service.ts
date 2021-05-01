import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message:string[] =[]
  constructor() { }

  add(msg){
    console.log(msg)
    this.message.push(msg)
  }
}
