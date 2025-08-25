import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetRequestComponent } from './Components/get-request/get-request.component';

const routes: Routes = [

    { path: '', component: GetRequestComponent },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
