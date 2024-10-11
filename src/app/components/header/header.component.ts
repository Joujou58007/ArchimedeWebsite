import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('logoAndName') logoElement!: ElementRef;
  @ViewChild('header', { static: true }) headerElement!: ElementRef;
  ngAfterViewInit() {
    this.headerElement.nativeElement.style.setProperty('--logoWidth', (this.logoElement.nativeElement.offsetWidth + 30) + 'px');
  }
}
