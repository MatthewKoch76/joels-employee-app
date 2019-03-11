
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatSelectModule,
  MatSnackBarModule
} from '@angular/material';

import { EmployeeManagementRoutingModule } from './employee-management-routing.module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

@NgModule({
  declarations: [EmployeeListComponent],
  imports: [
    CommonModule,
    EmployeeManagementRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatSnackBarModule
  ]
})
export class EmployeeManagementModule { }
