import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-sidebar',
  templateUrl: './navbar-sidebar.component.html',
  styleUrls: ['./navbar-sidebar.component.scss']
})
export class NavbarSidebarComponent {
  constructor(private router: Router) {}

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
