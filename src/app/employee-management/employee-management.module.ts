
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
import { EmployeeEditorComponent } from './components/employee-editor/employee-editor.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeeListComponent, EmployeeEditorComponent],
  imports: [
    CommonModule,
    EmployeeManagementRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ]
})
export class EmployeeManagementModule { }
