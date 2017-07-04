import { Component, OnInit } from '@angular/core';
import {Customer,Cities} from './customer.model';


@Component({
    selector: 'cust-data',
    templateUrl: './app/customer.html'
})
export class CustomerComponent implements OnInit {
    customer:Customer;
    customers:Array<Customer>;
    cities:string[];
   // cities = Cities;
   

    constructor() { 
        this.customer = new Customer(0,'','','');
        this.customers = new Array<Customer>();
        this.cities = ['Pune','Mumbai','Nagpur','Kolhapur'];
    }

    save(){
        this.customers.push(this.customer);
    }
    clear(){
        this.customer = new Customer(0,'','','');
    }

    selctcustomer(cust:Customer){
        this.customer = cust;
    }


    ngOnInit() { }
}