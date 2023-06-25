import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prouducts-details',
  templateUrl: './prouducts-details.component.html',
  styleUrls: ['./prouducts-details.component.css']
})
export class ProuductsDetailsComponent implements OnInit {
  productID :any;
  product :any;
  constructor(private router:Router,
    private activatedRoute:ActivatedRoute,
    private productService:ProductService) {
    }

  ngOnInit(): void {
    this.productID=this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.getProduct(this.productID).subscribe({
      next:((response)=>{
        this.product=response;
      }),
      error:((erorr)=>{
        console.log(erorr);
      })
        })
  }

    backToHome(){
      this.router.navigate(['/products']);
    }
}
