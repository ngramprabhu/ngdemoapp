System.register(['@angular/core', './customer.model', '@angular/forms'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, customer_model_1, forms_1;
    var CustomerDataDrivenFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (customer_model_1_1) {
                customer_model_1 = customer_model_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            CustomerDataDrivenFormComponent = (function () {
                //Ends Here
                function CustomerDataDrivenFormComponent() {
                    this.customer = new customer_model_1.Customer(0, '', '', '');
                    this.customers = new Array();
                    this.cities = ['Pune', 'Mumbai', 'Nagpur', 'Kolhapur'];
                    this.isSubmitted = false;
                    //Code for linking Customer Model with FormGroup
                    this.form = new forms_1.FormGroup({
                        custId: new forms_1.FormControl(this.customer.CustId),
                        custName: new forms_1.FormControl(this.customer.CustName),
                        address: new forms_1.FormControl(this.customer.Address),
                        city: new forms_1.FormControl(this.customer.City)
                    });
                    //Ends Here
                }
                CustomerDataDrivenFormComponent.prototype.save = function () {
                    this.customers.push(this.customer);
                    this.isSubmitted = true;
                };
                CustomerDataDrivenFormComponent.prototype.clear = function () {
                    this.customer = new customer_model_1.Customer(0, '', '', '');
                };
                CustomerDataDrivenFormComponent.prototype.selctcustomer = function (cust) {
                    this.customer = cust;
                    this.isSubmitted = false;
                };
                CustomerDataDrivenFormComponent.prototype.loadform = function () {
                    this.customer = new customer_model_1.Customer(0, '', '', '');
                    this.isSubmitted = false;
                };
                CustomerDataDrivenFormComponent.prototype.ngOnInit = function () { };
                CustomerDataDrivenFormComponent = __decorate([
                    core_1.Component({
                        selector: 'cust-data-drive-form',
                        templateUrl: './app/customerdatadrivenform.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], CustomerDataDrivenFormComponent);
                return CustomerDataDrivenFormComponent;
            }());
            exports_1("CustomerDataDrivenFormComponent", CustomerDataDrivenFormComponent);
        }
    }
});
