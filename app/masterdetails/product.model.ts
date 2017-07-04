export class Product{
    constructor(
        public prodId:number,
        public prodName:string,
        public catName:string
    ){}
}

export const Products=[
    {prodId:101,prodName:'P1',catName:'ECTR'},
    {prodId:102,prodName:'P2',catName:'ECTL'},
    {prodId:103,prodName:'P3',catName:'MECH'},
    {prodId:104,prodName:'P4',catName:'ECTR'},
    {prodId:105,prodName:'P5',catName:'ECTL'},
    {prodId:106,prodName:'P6',catName:'MECH'}
];