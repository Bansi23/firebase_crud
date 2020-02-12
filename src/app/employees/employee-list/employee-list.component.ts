import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model'
import { isNgTemplate } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[];
  fnameFilter: any = { fname: '' };
  @Input() public titletochild;





  onEdit(emp: Employee) {
    console.log('emp', emp);
    this.employeeService.selectedEmployee = Object.assign({}, emp);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(key);
      this.tostr.error("Delete successfully", "Employee register")
    }
  }
  ngOnInit() {
    var getuserdata = this.employeeService.getData();
    getuserdata.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      item.forEach(element => {
        var addrecord = element.payload.toJSON();
        addrecord["$key"] = element.key;
        this.employeeList.push(addrecord as Employee)
      });
    });
  }
  constructor(private employeeService: EmployeeService, private tostr: ToastrService) { }
}
