import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarteComponent } from './components/carte/carte.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { AddcarteComponent } from './components/addcarte/addcarte.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EditcarteComponent } from './components/editcarte/editcarte.component';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { TuktukComponent } from './components/tuktuk/tuktuk.component';
import { AddtuktukComponent } from './components/addtuktuk/addtuktuk.component';
import { EdituktukComponent } from './components/edituktuk/edituktuk.component';
import { TaxiComponent } from './components/taxi/taxi.component';
import { AddtaxiComponent } from './components/addtaxi/addtaxi.component';
import { EditaxiComponent } from './components/editaxi/editaxi.component';
import { MatSelectModule } from '@angular/material/select';
import { GarageComponent } from './components/garage/garage.component';
import { AddgarageComponent } from './components/addgarage/addgarage.component';
import { EditgarageComponent } from './components/editgarage/editgarage.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    SidebarComponent,
    CarteComponent,
    AddcarteComponent,
    EditcarteComponent,
    TuktukComponent,
    AddtuktukComponent,
    EdituktukComponent,
    TaxiComponent,
    AddtaxiComponent,
    EditaxiComponent,
    GarageComponent,
    AddgarageComponent,
    EditgarageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule ,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
