import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversionsComponent } from './conversions/conversions.component'

const routes: Routes = [
  {path: ':rep', component: ConversionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
