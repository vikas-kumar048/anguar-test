import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HighchartsChartModule 
  ],
  providers: [ 
    MainComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
