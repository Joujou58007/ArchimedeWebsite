import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('logoAndName') logo!: ElementRef;
  ngAfterViewInit() {
    document.documentElement.style.setProperty('--logoWidth', (this.logo.nativeElement.offsetWidth + 30) + 'px');
  }

}
