import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProuductsComponent } from './components/prouducts/prouducts.component';
import { ContentComponent } from './components/content/content.component';
import { ProuductsDetailsComponent } from './components/prouducts-details/prouducts-details.component';
import { ProuductsFormComponent } from './components/prouducts-form/prouducts-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'',component:ContentComponent},
  {path:'home',component:ContentComponent},
  {path:'products',component:ProuductsComponent},
  {path:'products/:id',component:ProuductsDetailsComponent},
  {path:'products/:id/:edit',component:ProuductsFormComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
