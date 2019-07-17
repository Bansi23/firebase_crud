import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

const routes: Routes = [
  { path: 'EmployeeRegistration',        component: EmployeeComponent },
  { path: '',   redirectTo: '/EmployeeList', pathMatch: 'full' },
  { path: 'EmployeeList',        component: EmployeeListComponent },

//  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
