import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginContainerService } from '../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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

  loginContainerService: LoginContainerService;

  constructor(private route: ActivatedRoute) {
    this.loginContainerService = new LoginContainerService();
    this.perfis = this.loginContainerService.loadPerfis();
    this.usr = this.route.snapshot.params['usr'];
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.usr = params['usr'];
    });

    console.log(this.perfis.length);
    for (var i = 0; i < this.perfis.length; i++) {
      if (this.perfis[i].usr == this.usr) {
        this.nomPerfil = this.perfis[i].usuario;
        this.srcPerfil = this.perfis[i].src;
        console.log('achou');
      }
    }
    console.log(this.usr);
  }

  ngOnDestroy() {
    this.inscricao?.unsubscribe();
  }
}
