import { Injectable } from '@angular/core';

import {EmployeeInfo,Employees} from '../services/employee.model';


@Injectable()
export class SimpleDataService {
    employees=Employees;
    constructor() {

     }
     getEmployees(){
         return this.employees;
     }
}