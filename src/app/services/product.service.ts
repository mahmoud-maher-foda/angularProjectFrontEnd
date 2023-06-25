import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

baseUrl:string='http://localhost:3005/products';
  constructor(private http:HttpClient) { }
  getAllProducts(){
    return this.http.get(this.baseUrl);
  }
  getProduct(productID:any){
    return this.http.get(`${this.baseUrl}/${productID}`);
  }
  AddProduct(product:any){
    return this.http.post(this.baseUrl,product);
  }
  editProduct(product:any,productID:any){
    return this.http.put(`${this.baseUrl}/${productID}`,product);
  }
  deleteProduct(productID:any){
    return this.http.delete(`${this.baseUrl}/${productID}`);
  }
  


}
