import { Component, OnInit } from '@angular/core';
import { Perfil } from './models/models.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'project-movies-site';

  login: boolean = true;

  perfis?: Perfil[];

  ngOnInit(): void {
    this.loadPerfis();
  }

  loadPerfis() {
    this.perfis?.push({
      usuario: 'Perfil 1',
      src: '../assets/perfil-01.png',
    });

    this.perfis?.push({
      usuario: 'Perfil 2',
      src: '../assets/perfil-02.png',
    });

    this.perfis?.push({
      usuario: 'Perfil 3',
      src: '../assets/perfil-03.png',
    });

    this.perfis?.push({
      usuario: 'Perfil 4',
      src: '../assets/perfil-04.png',
    });

    return this.perfis;
  }
}
