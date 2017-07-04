export class Customer{
    constructor(
        public CustId:number,
        public CustName:string,
        public Address:string,
        public City:string,
    ){

    }
}

export const Cities = [
    {CityId:1,CityName:'Pune'},
    {CityId:2,CityName:'Mumbai'},
    {CityId:3,CityName:'Kolhapur'},
    {CityId:4,CityName:'Nagpur'}
];
