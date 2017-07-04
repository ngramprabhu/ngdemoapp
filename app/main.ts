import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {SimpleComponent} from './simple.component';
import {NgModelDemoComponent} from './ngModeldemo.component';
import {CustomerComponent} from './customer.component';
import {CustomerSimpleFormComponent} from './customersimpleform.component';
import {CustomerDataDrivenFormComponent} from './customer-data-driven-form.component';
import {CustomerDataDrivenFormValidComponent} from './customer-data-driven-form-valid.component'

import {PersonComponent} from './person.component';

import {CategoryComponent} from './masterdetails/category.component';
import {ProductComponent} from './masterdetails/product.component';

import {TestDirectiveComponent} from './customdirective/testdirective.component';

import {ColorDirective} from './customdirective/color.custom.directive';

import {SimpleDataService} from './services/simple.service';
import {SimpleServiceComponent} from './services/simple.service.component';

import {EmployeeHttpService} from './httpservice/employee.http.service';
import {EmployeeHttpComponent} from './httpservice/employee.http.component';

// import {HomeComponent} from './routerapp/home.component';
// import {AboutComponent} from './routerapp/about.component';
// import {ContactComponent} from './routerapp/contact.component';
// import {MainComponent} from './routerapp/main.component';
//import {routing} from './routerapp/app.routetable';
 
import {PipeDemoComponent} from './pipes/app.pipe.component';

import {CustomPipeComponent} from './pipes/app.custom.pipe.component';

import {ProductFilterPipe} from './pipes/custome.pipe';


@NgModule({
    imports: [BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule], //,routing
        
    declarations: [SimpleComponent,
    NgModelDemoComponent,
    CustomerComponent,
    CustomerSimpleFormComponent,
    CustomerDataDrivenFormComponent,
    CustomerDataDrivenFormValidComponent,
    PersonComponent,
    CategoryComponent,
    ProductComponent,
    ColorDirective,
    TestDirectiveComponent,
    SimpleServiceComponent,
    EmployeeHttpComponent,
    // HomeComponent,
    // AboutComponent,
    // ContactComponent,
    // MainComponent,
    PipeDemoComponent,
    ProductFilterPipe,
    CustomPipeComponent],

    providers:[SimpleDataService,EmployeeHttpService],
    
    bootstrap:[CustomPipeComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
