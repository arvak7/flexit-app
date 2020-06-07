import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employee.services'
import { EmployeeModel } from 'src/app/models/employee.model';

@Component({
  selector: 'app-nextevent',
  templateUrl: './nextevent.component.html',
  styleUrls: ['./nextevent.component.css']
})
export class NexteventComponent implements OnInit {

  constructor(private employeesService: EmployeesService) { }

  employees: EmployeeModel[] = [];

  ngOnInit(): void {
    this.employeesService.getAllEmployees()
      .subscribe((resp: EmployeeModel[]) => {
        this.employees = resp;
      });
  }


}
