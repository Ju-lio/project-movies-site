import { Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'component-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showSearchBar: boolean = false

  @Input() nomPerfil: string = ''
  @Input() srcPerfil: string = ''
  @Input() usrPerfil: string = ''

  @ViewChild('searchBar') searchBar!: ElementRef 

  constructor() {
  }

  ngOnInit(): void {
  }

  changeSearchBar() {
    this.showSearchBar = !this.showSearchBar
    if(this.showSearchBar) {
      setTimeout(() => { this.searchBar.nativeElement.focus() }, 1);
    }
  }

}
