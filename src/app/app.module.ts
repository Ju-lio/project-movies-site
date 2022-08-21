import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DestaquesComponent } from './destaques/destaques.component';
import { DestaqueDadosComponent } from './destaque-dados/destaque-dados.component';
import { FilmeComponent } from './filme/filme.component';
import { FilmesContainerComponent } from './filmes-container/filmes-container.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DestaquesComponent,
    DestaqueDadosComponent,
    FilmeComponent,
    FilmesContainerComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
