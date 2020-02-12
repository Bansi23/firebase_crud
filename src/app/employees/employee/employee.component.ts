import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../shared/employee.service';
import { ToastrService } from 'ngx-toastr';
import { MyDatePickerModule } from 'mydatepicker'; import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { Options } from 'ng5-slider';
;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private tostr: ToastrService) { }
  @ViewChild(EmployeeListComponent) private editQue: EmployeeListComponent;

  ngOnInit() {
    this.ResetForm();
  }

  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 200
  };
  onSubmit(employeeForm: NgForm, isValid: boolean) {
    if (employeeForm.value.$key == null) {
      this.employeeService.insertEmployee(employeeForm.value);
      this.tostr.success('registration Successfully', 'Employee Registered')
      this.ResetForm(employeeForm);
      employeeForm.reset();
      this.ngOnInit();
    }
    else {
      this.employeeService.updateEmployee(employeeForm.value);
      this.tostr.success('Update employee Successfully', 'Employee updated')
      this.ResetForm(employeeForm);
      employeeForm.reset();
      this.ngOnInit();
      const aa = this.editQue.employeeList;
      console.log('aa', aa);

    }
  };
  ResetForm(empemployeeForm?: NgForm) {
    if (empemployeeForm != null)
      empemployeeForm.reset();
    this.employeeService.selectedEmployee = {
      $key: null,
      fname: '',
      lname: '',
      bdate: '',
      mobileno: '',
      email: '',
      pass: '',
      cpass: '',
      address: '',
      gender: '',
      age: '',
      pinno: ''
    }
  }
}


