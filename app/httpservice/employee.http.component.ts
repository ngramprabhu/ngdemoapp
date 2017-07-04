import { Component, OnInit } from '@angular/core';
import {EmployeeHttpService} from '../httpservice/employee.http.service';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {EmployeeInfo} from '../httpservice/employee.service.model';


@Component({
    selector: 'emp-http-serv',
    templateUrl: './app/httpservice/employee.service.html',
    providers:[EmployeeHttpService]
})
export class EmployeeHttpComponent implements OnInit {
    emps:Array<EmployeeInfo>;
    emp:EmployeeInfo;
    constructor(private serv:EmployeeHttpService) {
        this.emps = new Array<EmployeeInfo>();
        this.emp = new EmployeeInfo(0,'',0,'','');
     }

    ngOnInit() {
        this.loadEmployee();
     }

    private loadEmployee(){
        this.serv.getEmployees()
                .subscribe((resp:Response)=>{
                    this.emps = resp.json();
                });
     }

     addEmployee(){
          this.emp = new EmployeeInfo(1001,'Tajas Sabnis',
           78000,'IT','Manager');
        this.serv.addEmployee(this.emp)
                .subscribe((resp:Response)=>{
                    this.emp = resp.json();
                    this.loadEmployee();
                });
     }

}