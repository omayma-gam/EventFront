import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatDrawer, MatDrawerContainer, MatSidenavModule} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from '@angular/material/list';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatButton, MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatMenuTrigger,
    MatMenu,
    MatDrawer,
    MatNavList,
    MatDrawerContainer,
    MatListItem,
    RouterOutlet,
    MatButton,
    RouterLink,
    MatMenuItem,
    MatIconButton,
    MatSidenavModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
