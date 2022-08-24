import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginContainerService } from '../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LoginContainerService],
})
export class HomeComponent implements OnInit, OnDestroy {
  usr: string = '';
  nomPerfil: any;
  srcPerfil: any;
  inscricao: Subscription | undefined;

  perfis = [] as {
    usuario: string;
    src: string;
    usr: string;
  }[];

  perfil!: {
    //@@JSC
    usuario: string;
    src: string;
    usr: string;
  };

  constructor(
    private route: ActivatedRoute,
    private loginContainerService: LoginContainerService
  ) {
    this.usr = this.route.snapshot.params['usr']; //##JSC
    this.perfis = this.loginContainerService.loadPerfis();
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.usr = params['usr'];
    });

    this.perfil = this.perfis.filter(p => p.usr === this.usr)[0];

    this.nomPerfil = this.perfil.usuario; //##JSC
    this.srcPerfil = this.perfil.src; //##JSC
  }

  ngOnDestroy() {
    this.inscricao?.unsubscribe();
  }
}
