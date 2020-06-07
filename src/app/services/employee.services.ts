import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  url = 'http://localhost:8079/api/backoffice/v1/employees';

  constructor( private http: HttpClient) { }  
  
  getAllEmployees() {
    return this.http.get(`${this.url}`);
  }
}
