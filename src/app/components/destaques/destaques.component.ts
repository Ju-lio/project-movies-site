import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.css'],
})
export class DestaquesComponent implements OnInit {
  destaque: string = 'dstq-1';
  clicked: boolean = false;

  changeDestaque(dstq: string) {
    this.destaque = dstq;
    this.clicked = true;
    this.slide();
  }

  constructor() {}

  ngOnInit(): void {
    this.slide();
  }

  slide() {
    var num: number = parseInt(this.destaque.substring(5, 6));

    if (num == 3) num = 0;

    num += 1;

    setTimeout(() => {
      if (this.clicked) {
        this.clicked = false;
      } else {
        this.destaque = 'dstq-' + num.toString();
        this.slide();
      }
    }, 3000);
  }
}
