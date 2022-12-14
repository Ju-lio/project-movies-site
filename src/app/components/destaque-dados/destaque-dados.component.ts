import { Component, Input } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-destaque-dados',
  templateUrl: './destaque-dados.component.html',
  styleUrls: ['./destaque-dados.component.css'],
})
export class DestaqueDadosComponent {
  @Input() titulo: string = '';
  @Input() ano: string = '';
  @Input() duracao: string = '';
  @Input() extrelas: string = '';
  @Input() sinopse: string = '';
  @Input() dstq: string = '';

  dstqFav: boolean = false;

  constructor(private appComponent: AppComponent) {}
}
