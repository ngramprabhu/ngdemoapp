System.register(["@angular/core", "../httpservice/employee.http.service", "../httpservice/employee.service.model"], function (exports_1, context_1) {
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
    var core_1, employee_http_service_1, employee_service_model_1, EmployeeHttpComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (employee_http_service_1_1) {
                employee_http_service_1 = employee_http_service_1_1;
            },
            function (employee_service_model_1_1) {
                employee_service_model_1 = employee_service_model_1_1;
            }
        ],
        execute: function () {
            EmployeeHttpComponent = (function () {
                function EmployeeHttpComponent(serv) {
                    this.serv = serv;
                    this.emps = new Array();
                    this.emp = new employee_service_model_1.EmployeeInfo(0, '', 0, '', '');
                }
                EmployeeHttpComponent.prototype.ngOnInit = function () {
                    this.loadEmployee();
                };
                EmployeeHttpComponent.prototype.loadEmployee = function () {
                    var _this = this;
                    this.serv.getEmployees()
                        .subscribe(function (resp) {
                        _this.emps = resp.json();
                    });
                };
                EmployeeHttpComponent.prototype.addEmployee = function () {
                    var _this = this;
                    this.emp = new employee_service_model_1.EmployeeInfo(1001, 'Tajas Sabnis', 78000, 'IT', 'Manager');
                    this.serv.addEmployee(this.emp)
                        .subscribe(function (resp) {
                        _this.emp = resp.json();
                        _this.loadEmployee();
                    });
                };
                return EmployeeHttpComponent;
            }());
            EmployeeHttpComponent = __decorate([
                core_1.Component({
                    selector: 'emp-http-serv',
                    templateUrl: './app/httpservice/employee.service.html',
                    providers: [employee_http_service_1.EmployeeHttpService]
                }),
                __metadata("design:paramtypes", [employee_http_service_1.EmployeeHttpService])
            ], EmployeeHttpComponent);
            exports_1("EmployeeHttpComponent", EmployeeHttpComponent);
        }
    };
});
