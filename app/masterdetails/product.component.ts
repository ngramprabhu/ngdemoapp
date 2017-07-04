import { Component, OnInit,Input } from '@angular/core';

import {Product,Products} from '../masterdetails/product.model';

@Component({
    selector: 'prod-data',
    templateUrl: './app/masterdetails/product.html'
})
export class ProductComponent implements OnInit {
    products = Products;
    _catName:string;
    _filterProducts:Array<Product>;
    constructor() { 
        this._filterProducts = new Array<Product>();
    }
    //The catName property will receive 
    //data from the parent
    @Input()
    set catName(c:string){
        this._catName = (c && c.trim()) || 'No Data Received';
    }
    get catName(){
        return this._catName;
    }

    get filterProducts(){
        this._filterProducts = new Array<Product>();
        for(let p of Products){
            if(p.catName==this._catName){
                this._filterProducts.push(p);
            }
        }
        return this._filterProducts;
    }
    ngOnInit() { }

}