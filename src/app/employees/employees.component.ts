import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from './shared/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  
})
export class EmployeesComponent implements OnInit {

  @Input() public titletochild;
  constructor(private employeeService : EmployeeService) { }
  ngOnInit() {
  }
}
