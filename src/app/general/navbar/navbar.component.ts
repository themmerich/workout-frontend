import { Component, inject, OnInit } from '@angular/core';
import { Button } from 'primeng/button';
import { Menubar } from 'primeng/menubar';
import { NgIf } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../security/service/auth.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'sf-navbar',
  imports: [Button, Menubar, NgIf, RouterOutlet, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;
  authService = inject(AuthService);
  router = inject(Router);

  ngOnInit() {
    this.items = [
      { label: 'Dashboard', icon: 'pi pi-fw pi-home', route: 'dashboard' },
      {
        label: 'General',
        icon: 'pi pi-fw pi-info-circle',
        items: [
          { label: 'About', icon: 'pi pi-fw pi-info-circle', route: 'general/about' },
          { label: 'Organisations', icon: 'pi pi-fw pi-question-circle', route: 'organizations' },
          { label: '404', icon: 'pi pi-fw pi-envelope', route: 'general/not-found' },
        ],
      },
      { label: 'FAQ', icon: 'pi pi-fw pi-question-circle', route: 'general/faq' },
      { label: '404', icon: 'pi pi-fw pi-envelope', route: 'general/not-found' },
    ];
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
