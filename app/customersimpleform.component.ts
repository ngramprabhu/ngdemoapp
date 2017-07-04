import { Component, OnInit } from '@angular/core';
import {Customer,Cities} from './customer.model';


@Component({
    selector: 'cust-simple-form-data',
    templateUrl: './app/customersimpleform.html'
})
export class CustomerSimpleFormComponent implements OnInit {
    customer:Customer;
    customers:Array<Customer>;
    cities:string[];
    isSubmitted:boolean;
    
   

    constructor() { 
        this.customer = new Customer(0,'','','');
        this.customers = new Array<Customer>();
        this.cities = ['Pune','Mumbai','Nagpur','Kolhapur'];
        this.isSubmitted = false;
    }

    save(){
        this.customers.push(this.customer);
        this.isSubmitted = true;
    }
    clear(){
        this.customer = new Customer(0,'','','');
    }

    selctcustomer(cust:Customer){
        this.customer = cust;
        this.isSubmitted = false;
    }

    loadform(){
         this.customer = new Customer(0,'','','');
        this.isSubmitted = false;
    }


    ngOnInit() { }
}