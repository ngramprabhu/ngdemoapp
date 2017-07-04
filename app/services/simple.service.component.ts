import { Component, OnInit } from '@angular/core';

import {SimpleDataService} from '../services/simple.service';
@Component({
    selector: 'serv-data',
    templateUrl: './app/services/simple.service.html',
    providers:[SimpleDataService]
})
export class SimpleServiceComponent implements OnInit {
    constructor(private serv:SimpleDataService) { 

    }

    ngOnInit() { }
  
    getDataLength(){
        alert(this.serv.getEmployees().length);
    }
    
}