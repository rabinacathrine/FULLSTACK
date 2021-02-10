import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionComponent } from './action/action.component';
import { AddptogradComponent } from './addptograd/addptograd.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule} from '@angular/forms'
const routes: Routes = [

{path:"",component:RegistrationComponent},
{path:"addptograd",component:AddptogradComponent},
{path:"action",component:ActionComponent},
{path:"addptograd/action",component:ActionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
