import { Component, OnInit } from '@angular/core';
import {Customer,Cities} from './customer.model';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
    selector: 'cust-data-drive-form',
    templateUrl: './app/customerdatadrivenform.html'
})
export class CustomerDataDrivenFormComponent implements OnInit {
    
    customer:Customer;
    customers:Array<Customer>;
    cities:string[];
    isSubmitted:boolean;
    
    //code for defining the FormGroup and FormControl
    form:FormGroup;
    custId:FormControl;
    custName:FormControl;
    address:FormControl;
    city:FormControl; 
    //Ends Here

    constructor() { 
        this.customer = new Customer(0,'','','');
        this.customers = new Array<Customer>();
        this.cities = ['Pune','Mumbai','Nagpur','Kolhapur'];
        this.isSubmitted = false;
        
        //Code for linking Customer Model with FormGroup
        this.form = new FormGroup({
            custId:new FormControl(this.customer.CustId),
            custName:new FormControl(this.customer.CustName),
            address:new FormControl(this.customer.Address),
            city:new FormControl(this.customer.City)
        });
        //Ends Here
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