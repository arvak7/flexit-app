import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { EmployeesComponent } from './pages/employees/employees.component';
import { NexteventComponent } from './pages/nextevent/nextevent.component'
import { NavbarComponent } from './pages/navbar/navbar.component';


const routes: Routes = [
  { path: 'employees', component: EmployeesComponent }, 
  { path: 'navbar', component: NavbarComponent },
  { path: 'next', component: NexteventComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'employees'}
]

@NgModule({  
  imports: [ 
    RouterModule.forRoot(routes, {useHash: true})
   ],
   exports: [
     RouterModule
   ]
})
export class AppRoutingModule { }
