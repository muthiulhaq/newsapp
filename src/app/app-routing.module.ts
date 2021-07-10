import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsappHomeComponent } from './newsapp-home/newsapp-home.component';
import { NewsappContactUsComponent } from './newsapp-contact-us/newsapp-contact-us.component';

const routes: Routes = [
  { path: '', component: NewsappHomeComponent },
  { path: 'ae', component: NewsappHomeComponent },
  { path: 'in', component: NewsappHomeComponent },
  { path: 'us', component: NewsappHomeComponent },
  { path: 'sa', component: NewsappHomeComponent },
  { path: 'ph', component: NewsappHomeComponent },
  { path: 'contact us', component: NewsappContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
