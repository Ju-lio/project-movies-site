import { Component, OnInit } from '@angular/core';
import { LoginContainerService } from './login.service'

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   perfis = [] as {
      "usuario": string
      "src": string
      "usr": string
   }[]

   loginContainerService: LoginContainerService

   constructor() {
      this.loginContainerService = new LoginContainerService()
   }

   ngOnInit(): void {
      this.perfis = this.loginContainerService.loadPerfis()
   }

}
