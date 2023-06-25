import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnChanges {
  
@Input() logindata:string="login data";
@Input() flag:boolean=true;
loginTitle:string="";
ngOnChanges(): void {
  if(this.flag){
    this.loginTitle="login component"
  }else{
    this.loginTitle="register component"
  }
  
}

}
