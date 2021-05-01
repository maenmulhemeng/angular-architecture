import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-abstract-list',
  templateUrl: './index-abstract-list.component.html',
  styleUrls: ['./index-abstract-list.component.scss']
})
export class IndexAbstractListComponent implements OnInit {
    // properties
    @Input() items:any[];
    @Input() fields:any[];
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
}
