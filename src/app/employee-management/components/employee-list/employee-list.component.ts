import { Observable } from 'rxjs';
import { EmployeeService } from './../../../shared/services/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees$: Observable<Employee[]>;
  selectedEmployee: Employee;


  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees$ = this.employeeService.getEmployees();
  }

  public selectEmployee(employee: Employee) {
    this.selectedEmployee = employee;
  }

}
