import { Component, Input, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  @Input() maisAcessTitulo : string =''           
  @Input() maisAcessSrc    : string =''            
  @Input() maisAcessAno    : string =''        
  @Input() maisAcessDuracao: string =''   
  
  constructor() { }

  ngOnInit(): void {
  }

}
