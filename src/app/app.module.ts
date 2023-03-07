import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http' ;
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormConsultaComponent } from './components/form-consulta/form-consulta.component';

@NgModule({
  declarations: [
    AppComponent,
    FormConsultaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
