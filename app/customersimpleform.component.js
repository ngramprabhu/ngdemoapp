System.register(["@angular/core", "./customer.model"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, customer_model_1, CustomerSimpleFormComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (customer_model_1_1) {
                customer_model_1 = customer_model_1_1;
            }
        ],
        execute: function () {
            CustomerSimpleFormComponent = (function () {
                function CustomerSimpleFormComponent() {
                    this.customer = new customer_model_1.Customer(0, '', '', '');
                    this.customers = new Array();
                    this.cities = ['Pune', 'Mumbai', 'Nagpur', 'Kolhapur'];
                    this.isSubmitted = false;
                }
                CustomerSimpleFormComponent.prototype.save = function () {
                    this.customers.push(this.customer);
                    this.isSubmitted = true;
                };
                CustomerSimpleFormComponent.prototype.clear = function () {
                    this.customer = new customer_model_1.Customer(0, '', '', '');
                };
                CustomerSimpleFormComponent.prototype.selctcustomer = function (cust) {
                    this.customer = cust;
                    this.isSubmitted = false;
                };
                CustomerSimpleFormComponent.prototype.loadform = function () {
                    this.customer = new customer_model_1.Customer(0, '', '', '');
                    this.isSubmitted = false;
                };
                CustomerSimpleFormComponent.prototype.ngOnInit = function () { };
                return CustomerSimpleFormComponent;
            }());
            CustomerSimpleFormComponent = __decorate([
                core_1.Component({
                    selector: 'cust-simple-form-data',
                    templateUrl: './app/customersimpleform.html'
                }),
                __metadata("design:paramtypes", [])
            ], CustomerSimpleFormComponent);
            exports_1("CustomerSimpleFormComponent", CustomerSimpleFormComponent);
        }
    };
});
