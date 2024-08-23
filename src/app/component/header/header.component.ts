import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  pages = ['home', 'about', 'calc'];
  showMenu(x: HTMLElement) {
    // HTMLDivElement
    if (x.className == 'myHeader') {
      x.className += 'responsive';
    } else {
      x.className = 'myHeader';
    }
  }
}
