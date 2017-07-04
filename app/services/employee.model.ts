export class EmployeeInfo{
    constructor(
        public EmpNo:number,
        public EmpName:string,
        public Salary:number,
        public DeptName:string,
        public Designation:string
    ){

    }
}

export const Employees = [
    {EmpNo:1,EmpName:'A',Salary:12000,DeptName:'IT',Desugnation:'MGR'},
    {EmpNo:2,EmpName:'B',Salary:13000,DeptName:'HR',Desugnation:'MGR'}
];