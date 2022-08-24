import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Midia } from 'src/app/models/models.model';

import { FilmesContainerService } from './filmes-container.service';

@Component({
  selector: 'app-filmes-container',
  templateUrl: './filmes-container.component.html',
  styleUrls: ['./filmes-container.component.css'],
  providers: [FilmesContainerService],
})
export class FilmesContainerComponent implements OnInit {
  @ViewChild('aba') abaElement!: ElementRef;

  @Input() containerTitle: string = '';
  @Input() genre: string = '';
  scrollValue: number = 0;

  midias?: Midia[];

  constructor(private filmesContainerService: FilmesContainerService) {}

  ngOnInit() {
    this.midias = this.filmesContainerService.loadFilmes(this.genre);
  }

  getMidia(idx: number, prop: string) {
    if (prop == 'titulo') {
      return this.midias![idx].titulo;
    } else if (prop == 'src') {
      return this.midias![idx].src;
    } else if (prop == 'ano') {
      return this.midias![idx].ano;
    } else if (prop == 'duracao') {
      return this.midias![idx].duracao;
    } else {
      return '';
    }
  }

  nextClick() {
    if (
      this.abaElement.nativeElement.scrollLeft <
      this.abaElement.nativeElement.scrollWidth
    ) {
      this.abaElement.nativeElement.scrollLeft += 200;
    }
  }

  priorClick() {
    if (this.abaElement.nativeElement.scrollLeft > 0) {
      this.abaElement.nativeElement.scrollLeft -= 200;
    }
  }
}
