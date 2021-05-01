import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-abstract-list',
  templateUrl: './admin-abstract-list.component.html',
  styleUrls: ['./admin-abstract-list.component.scss']
})
export class AdminAbstractListComponent implements OnInit {
  // properties
  @Input() items:any[];
  @Input() fields:any[];
  @Input() editLink:string;
  @Output() deleteItem = new EventEmitter<any>();
  // constructors
  constructor() {
    
  }

  // Settters and Getters
  getItems(){
    return this.items;
  }
  setItems(items:any[]){
    this.items = items;
  }

  // Lifecycles
  ngOnInit(): void {
    
  }

  // Methods
  getFields(){
    return this.fields;
  }

  buildEditLink(id){
    return `${this.editLink}/${id}`;
  }

  emitDeleteItem(id){
    this.deleteItem.emit(id)
  }
  hasDelete(){
   // console.log(this.deleteItem)
    return this.deleteItem.observers.length>0? true:false;
  }
}
