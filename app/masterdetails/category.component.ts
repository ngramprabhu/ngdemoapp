import { Component, OnInit } from '@angular/core';

import {Category,Categories} from '../masterdetails/category.model';

@Component({
    selector: 'cat-data',
    templateUrl: './app/masterdetails/category.html'
})
export class CategoryComponent implements OnInit {
    categories = Categories;
    catName:string;
    constructor() {
        this.catName = '';
     }

    ngOnInit() { }

    selectedCategory(cat){
        this.catName = cat.catName;
    }
}