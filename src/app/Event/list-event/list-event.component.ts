import {Component, OnInit} from '@angular/core';
import {ClientServiceService} from '../../ClientService.service';
import {Router, RouterLink} from '@angular/router';
import {EventService} from '../../event.service';
import {NgForOf} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-list-event',
  standalone: true,
  imports: [
    NgForOf,HttpClientModule,
    RouterLink
  ],
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
})
export class ListEventComponent implements OnInit{
  Eventlist: any[] = []

  constructor(private eventservice: EventService, private router: Router) {
  }


  ngOnInit(): void {
    this.afficherEvent()
  }


  private afficherEvent() {
    this.eventservice.AfficherEvent().subscribe(Data => {
      this.Eventlist = Data
      console.log(Data)
    })
  }


  Supprimeclient(id: number) {
    console.log("ok")
    let conf = confirm("'Voulez-vous le supprimer Article?")
    if (conf) {
      this.eventservice.supprimerEvent(id).subscribe(supprime => {
        if (supprime) {
          this.afficherEvent()
        }
        window.location.reload();  // Reloads the entire page

      })
    }
  }
}
