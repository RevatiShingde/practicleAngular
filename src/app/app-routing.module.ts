import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrgnizationComponent } from './list-orgnization/list-orgnization.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'organization-list',component:ListOrgnizationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
