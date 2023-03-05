import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormConsultaComponent } from './components/form-consulta/form-consulta.component';

@NgModule({
  declarations: [
    AppComponent,
    FormConsultaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
