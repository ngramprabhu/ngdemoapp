import { Injectable } from '@angular/core';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import {EmployeeInfo} from '../httpservice/employee.service.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EmployeeHttpService {
    private servUrl="http://localhost:8516/api/EmployeeInfoAPI";
    
    //1. Inject Http in the constructor
    constructor(private http:Http) { }

    //2. Function to load add Employees
    getEmployees():Observable<Response>{
        return this.http.get(this.servUrl);
    }

    //3. Function to add a new Employee
    addEmployee(emp:EmployeeInfo):Observable<Response>{
        //3a: Define the header
        let header = new Headers({'Content-Type': 'application/json'});
        //3b: Define Request Options for passing header in request
        let options = new RequestOptions({headers:header});
        //3c: Make a post call
        return  this.http.post(
            this.servUrl,
            JSON.stringify(emp),
            options
        );
    }
} 