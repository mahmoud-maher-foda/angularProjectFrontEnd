import { ProductService } from './../../services/product.service';
import { productList } from 'src/app/models/productList';
import { Iproduct } from './../../models/iproduct';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prouducts',
  templateUrl: './prouducts.component.html',
  styleUrls: ['./prouducts.component.css']
})
export class ProuductsComponent implements OnInit {
  arr :Number[]=[1,2,3];
products:any=[];
constructor(private productService:ProductService) {
  //this.products=productList;
  
}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next:(response)=>{
        this.products=response;
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }


  deleteProductHandler(productID:any){
    this.productService.deleteProduct(productID).subscribe();
    this.products=this.products.filter((prod:any)=>{prod.id!=productID;})
  }
}
