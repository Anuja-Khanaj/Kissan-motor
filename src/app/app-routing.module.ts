import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './component/auth/auth.component';
import { HomeComponent } from './component/authenticated/home/home.component';
import { NavbarComponent } from './component/authenticated/home/navbar/navbar.component';
import { AddcarComponent } from './component/authenticated/addcar/addcar.component';
import { ShowcarComponent } from './component/authenticated/showcar/showcar.component';

const routes: Routes = [
  {path:'' , component:AuthComponent},
  {path:'home', component:HomeComponent},
  {path:'addcar', component:AddcarComponent},
  {path: 'showcar', component:ShowcarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
