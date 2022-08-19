import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.css']
})
export class DestaquesComponent implements OnInit {

  destaque: string = 'dstq-1'

  changeDestaque(dstq: string) {
    this.destaque = dstq
  }

  constructor() { }

  ngOnInit(): void {
  }

}
