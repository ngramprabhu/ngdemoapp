import { Component, OnInit } from '@angular/core';
import {Person} from './person.model';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {CustomEmailValidator} from './email.custom.valid';

@Component({
    selector: 'person-data',
    templateUrl: './app/person.custvalid.html'
})
export class PersonComponent implements OnInit {
    p:Person;
     frm:FormGroup;
     email:FormControl; 
     constructor() {
        this.p = new Person(0,'','');
        this.frm = new FormGroup({
            email:new FormControl(
                this.p.Email,
                Validators.compose([
                   CustomEmailValidator.emailValidator 
                ])
            )
        });
      }

    ngOnInit() { }
}