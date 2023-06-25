import { ProductService } from './../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import{FormControl, FormGroup,Validators} from'@angular/forms';
@Component({
  selector: 'app-prouducts-form',
  templateUrl: './prouducts-form.component.html',
  styleUrls: ['./prouducts-form.component.css']
})
export class ProuductsFormComponent implements OnInit {
  productID:any;
    product:any;
  constructor(private activatedRoute:ActivatedRoute,
    private productService:ProductService,
    private router:Router) {
   
    
  }
  ngOnInit(): void {
    this.productID=this.activatedRoute.snapshot.paramMap.get('id');
    if (this.productID!=0) {
      
   this.productService.getProduct(this.productID).subscribe((response)=>{
    this.product=response;
    this.getProductName.setValue(this.product.productName);
    this.getPrice.setValue(this.product.price);
    this.getQuantity.setValue(this.product.quantity);
   });
    }
  }

  ////VALIDATION
  ProuductsForm=new FormGroup({
    productName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    price :new FormControl('',[Validators.required,Validators.min(20)]),
    quantity :new FormControl('',[Validators.required]),
  });

  get getProductName(){
    return this.ProuductsForm.controls['productName'];
  }

  get getPrice(){
    return this.ProuductsForm.controls['price'];
  }
  get getQuantity(){
    return this.ProuductsForm.controls['quantity'];
  }
  formOperation(){ 
    if (this.ProuductsForm.status=='VALID') {
     if (this.productID==0) {
      this.productService.AddProduct(this.ProuductsForm.value).subscribe();
     }else{
      this.productService.editProduct(this.ProuductsForm.value,this.productID).subscribe();
     }
     this.router.navigate(['/products']);
    }

   }

}
