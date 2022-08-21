import { Component, Input, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  @Input() filmeTitulo : string =''           
  @Input() filmeSrc    : string =''            
  @Input() filmeAno    : string =''        
  @Input() filmeDuracao: string =''   
  
  constructor() { }

  ngOnInit(): void {
  }

}
