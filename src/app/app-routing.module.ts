import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {bankRoutes} from './routes/bankRoutes';
import {customerRoutes} from './routes/customerRoutes';
import {generalRoutes} from './routes/generalRoutes';

const routes: Routes = [
...bankRoutes,
...customerRoutes,
...generalRoutes];
/*
{ path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
  */
 // imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
