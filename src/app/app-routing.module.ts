import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistictComponent } from './distict/distict.component';
import { StateComponent } from './state/state.component';
import { DateComponent } from './date/date.component';
import { ThumbComponent } from './thumb/thumb.component';
import {ResponsiveComponent} from './responsive/responsive.component';
import { VillageComponent } from './village/village.component';
import { CountryComponent } from './country/country.component';


const routes: Routes = [
  // { path: '', component: DistictComponent },
  //  {path:'distict',component:DistictComponent},
  // { path: 'state', component: StateComponent },
  // {path:'',component:DateComponent},
  // {path:'',component:ThumbComponent},
  // {path:'',component:ResponsiveComponent},
  // {path:'',component:VillageComponent},
  {path:'',component:VillageComponent},
  // {path:'',component:CountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
