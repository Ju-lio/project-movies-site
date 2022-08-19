import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  filmes = [] as {
    "titulo": string
    "src": string
    "ano": string
    "duracao": string
  }[]

  title = 'project-movies-site'

  importar = true

  carregaFilmes() {

    if(this.importar){

      this.importar = false;

      this.filmes.push({
        titulo  : 'NIGHTCRAWLER',
        src     : '../assets/mais-acess-00.png',
        ano     : '2014',
        duracao : '1h 57m' 
      }) 

      this.filmes.push({
        titulo  : 'FIGHT CLUB',
        src     : '../assets/mais-acess-01.png',
        ano     : '1999',
        duracao : '2h 19m'
      })

      this.filmes.push({
        titulo  : 'NO COUNTRY FOR OLD MAN',
        src     : '../assets/mais-acess-02.png',
        ano     : '2007 ',
        duracao : '2h 2m'
      })

      this.filmes.push({
        titulo  : 'NOCTURNAL ANIMALS',
        src     : '../assets/mais-acess-03.png',
        ano     : '2016 ',
        duracao : '1h 19m'
      })

      this.filmes.push({
        titulo  : 'VIVARIUM',
        src     : '../assets/mais-acess-04.png',
        ano     : '2019  ',
        duracao : '1h 37m'
      })

      this.filmes.push({
        titulo  : 'MARROWBONE',
        src     : '../assets/mais-acess-05.png',
        ano     : '2017 ',
        duracao : '1h 50m'
      })

      this.filmes.push({
        titulo  : 'DONNIE DARKO',
        src     : '../assets/mais-acess-06.png',
        ano     : '2001  ',
        duracao : '1h 53m'
      })

      this.filmes.push({
        titulo  : 'CONJURING',
        src     : '../assets/mais-acess-07.png',
        ano     : '2013',
        duracao : '1h 52m'
      })
    }
  }

}
