import { Component, OnInit } from '@angular/core';
import { LoginContainerService } from './login.service';
import { Perfil } from '../../models/models.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginContainerService],
})
export class LoginComponent implements OnInit {
  perfis!: Perfil[];

  constructor(private loginContainerService: LoginContainerService) {}

  ngOnInit(): void {
    this.perfis = this.loginContainerService.loadPerfis();
  }
}
