import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Employee } from './employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();
  constructor(private firebase: AngularFireDatabase) {
  }
  getData() {
    this.employeeList = this.firebase.list('employees');
    return this.employeeList;
  }
  insertEmployee(employee: Employee) {
    this.employeeList.push({
      fname: employee.fname,
      lname: employee.lname,
      bdate: employee.bdate,
      mobileno: employee.mobileno,
      email: employee.email.toLowerCase(),
      pass: employee.pass,
      cpass: employee.cpass,
      address: employee.address,
      gender: employee.gender,
      age: employee.age,
      pinno: employee.pinno,
    });
  }
  updateEmployee(employee: Employee) {
    this.employeeList.update(employee.$key, {
      fname: employee.fname,
      lname: employee.lname,
      bdate: employee.bdate,
      mobileno: employee.mobileno,
      email: employee.email.toLowerCase(),
      pass: employee.pass,
      cpass: employee.cpass,
      address: employee.address,
      gender: employee.gender,
      age: employee.age,
      pinno: employee.pinno,
    });
  }
  deleteEmployee($key: string) {
    this.employeeList.remove($key);
  }
}