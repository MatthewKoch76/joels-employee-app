import { Observable } from 'rxjs';
import { TitlesService } from './../../../shared/services/titles.service';
import { Employee } from './../../../shared/models/employee';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-editor',
  templateUrl: './employee-editor.component.html',
  styleUrls: ['./employee-editor.component.scss']
})
export class EmployeeEditorComponent implements OnInit {
  titles$: Observable<string[]>;
  employeeForm: FormGroup;

  @Input() set employee(employee: Employee) {
    this.employeeForm.reset(employee);
  }

  @Output() employeeChange = new EventEmitter<Employee>();
  constructor(
    formbuilder: FormBuilder,
    private titleService: TitlesService) {
    this.employeeForm = formbuilder.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      lineOfService: ['', Validators.required],
      role: ['', Validators.required],
      title: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.titles$ = this.titleService.titles$;
  }

  public cancel() {
    this.employeeChange.emit(undefined);
  }

  public submit() {
    const employee: Employee = this.employeeForm.value;
    this.employeeChange.emit(undefined);
    console.log(employee);
  }

}
