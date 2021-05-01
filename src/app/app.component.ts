import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Architecture';
  background='yellow';

  links=[
  {link:'/home',title:'Home'},
  {link:'/bank/index',title:'Banks'},
  {link:'/bank/admin',title:'Banks Management'},
  {link:'/customer/index',title:'Customer'},
  {link:'/customer/admin',title:'Customers Management'}
  ]
  
}
