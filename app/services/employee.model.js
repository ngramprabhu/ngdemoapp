System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EmployeeInfo, Employees;
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
            exports_1("Employees", Employees = [
                { EmpNo: 1, EmpName: 'A', Salary: 12000, DeptName: 'IT', Desugnation: 'MGR' },
                { EmpNo: 2, EmpName: 'B', Salary: 13000, DeptName: 'HR', Desugnation: 'MGR' }
            ]);
        }
    };
});
