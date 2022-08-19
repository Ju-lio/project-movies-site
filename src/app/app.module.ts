import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DestaquesComponent } from './destaques/destaques.component';
import { DestaqueDadosComponent } from './destaque-dados/destaque-dados.component';
import { FilmeComponent } from './filme/filme.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DestaquesComponent,
    DestaqueDadosComponent,
    FilmeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
