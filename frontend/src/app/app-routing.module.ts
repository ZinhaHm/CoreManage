import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarteComponent } from './components/carte/carte.component';
import { AddcarteComponent } from './components/addcarte/addcarte.component';
import { TuktukComponent } from './components/tuktuk/tuktuk.component';
import { TaxiComponent } from './components/taxi/taxi.component';
import { GarageComponent } from './components/garage/garage.component';


const routes: Routes = [
  {
path: 'home', component: HomeComponent },
{
  path: 'carte', component: CarteComponent },
  {
    path: 'addcarte', component: AddcarteComponent },
    
  {
    path: 'tuktuk', component:TuktukComponent },
    {
      path: 'taxi', component:TaxiComponent },
      {
        path: 'garage', component: GarageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
