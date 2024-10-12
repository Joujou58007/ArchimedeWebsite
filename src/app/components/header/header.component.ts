import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
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
