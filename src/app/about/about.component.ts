import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    RouterLink,
    MatButton
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
