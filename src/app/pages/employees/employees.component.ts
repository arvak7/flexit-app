import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employee.services'
import { EmployeeModel } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private employeesService: EmployeesService) { }

  employees: EmployeeModel[] = [];

  ngOnInit(): void {
    this.employeesService.getAllEmployees()
      .subscribe((resp: EmployeeModel[]) => {
        this.employees = resp;
      });
  }

}
