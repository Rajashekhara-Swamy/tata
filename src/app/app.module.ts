import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StateComponent } from './state/state.component';
import { DistictComponent } from './distict/distict.component';
import { DateComponent } from './date/date.component';
import { ThumbComponent } from './thumb/thumb.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { VoteComponent } from './vote/vote.component';
import { VillageComponent } from './village/village.component';
import { CountryComponent } from './country/country.component'
import { MyserviceService } from './myservice.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RajaComponent } from './raja/raja.component';

@NgModule({
  declarations: [
    AppComponent,

    StateComponent,
    DistictComponent,
    DateComponent,
    ThumbComponent,
    ResponsiveComponent,
    VoteComponent,
    VillageComponent,
    CountryComponent,
    RajaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    //HttpClient,
   // HttpModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
