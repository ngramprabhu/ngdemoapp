System.register(["@angular/core", "./customer.model", "@angular/forms"], function (exports_1, context_1) {
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
    var core_1, customer_model_1, forms_1, CustomerDataDrivenFormValidComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (customer_model_1_1) {
                customer_model_1 = customer_model_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }
        ],
        execute: function () {
            CustomerDataDrivenFormValidComponent = (function () {
                //Ends Here
                function CustomerDataDrivenFormValidComponent() {
                    this.customer = new customer_model_1.Customer(0, '', '', '');
                    this.customers = new Array();
                    this.cities = ['Pune', 'Mumbai', 'Nagpur', 'Kolhapur'];
                    this.isSubmitted = false;
                    //Code for linking Customer Model with FormGroup
                    this.form = new forms_1.FormGroup({
                        custId: new forms_1.FormControl(this.customer.CustId, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern('[0-9]+')])),
                        custName: new forms_1.FormControl(this.customer.CustName, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern('[A-Za-z]+'),
                            forms_1.Validators.minLength(2), forms_1.Validators.maxLength(15)])),
                        address: new forms_1.FormControl(this.customer.Address),
                        city: new forms_1.FormControl(this.customer.City)
                    });
                    //Ends Here
                }
                CustomerDataDrivenFormValidComponent.prototype.save = function () {
                    this.customers.push(this.customer);
                    this.isSubmitted = true;
                };
                CustomerDataDrivenFormValidComponent.prototype.clear = function () {
                    this.customer = new customer_model_1.Customer(0, '', '', '');
                };
                CustomerDataDrivenFormValidComponent.prototype.selctcustomer = function (cust) {
                    this.customer = cust;
                    this.isSubmitted = false;
                };
                CustomerDataDrivenFormValidComponent.prototype.loadform = function () {
                    this.customer = new customer_model_1.Customer(0, '', '', '');
                    this.isSubmitted = false;
                };
                CustomerDataDrivenFormValidComponent.prototype.ngOnInit = function () { };
                return CustomerDataDrivenFormValidComponent;
            }());
            CustomerDataDrivenFormValidComponent = __decorate([
                core_1.Component({
                    selector: 'cust-data-drive-form-valid',
                    templateUrl: './app/customerdatadrivenvalidform.html'
                }),
                __metadata("design:paramtypes", [])
            ], CustomerDataDrivenFormValidComponent);
            exports_1("CustomerDataDrivenFormValidComponent", CustomerDataDrivenFormValidComponent);
        }
    };
});
