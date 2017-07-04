System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EmployeeInfo;
    return {
        setters: [],
        execute: function () {
            EmployeeInfo = (function () {
                function EmployeeInfo(EmpNo, EmpName, Salary, DeptName, Designation) {
                    this.EmpNo = EmpNo;
                    this.EmpName = EmpName;
                    this.Salary = Salary;
                    this.DeptName = DeptName;
                    this.Designation = Designation;
                }
                return EmployeeInfo;
            }());
            exports_1("EmployeeInfo", EmployeeInfo);
        }
    };
});
