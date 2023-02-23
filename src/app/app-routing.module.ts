import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'page1',
    component:HomeComponent
  },
  // {
  //   path:'page2',
  //   loadChildren:()=>import('./page2/page2.module').then(m=>m.Page2Module)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
