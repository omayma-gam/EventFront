import {Component, OnInit} from '@angular/core';
import {ClientServiceService} from '../ClientService.service';
import {Router, RouterLink} from '@angular/router';
import {DatePipe, NgForOf} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-listclient',
  standalone: true,
  imports: [  RouterLink,
    NgForOf, HttpClientModule],
  templateUrl: './listclient.component.html',
  styleUrl: './listclient.component.css'
})
export class ListclientComponent implements OnInit {
  clientlist: any[] = []

  constructor(private clientservice: ClientServiceService, private router: Router) {
  }


  ngOnInit(): void {
    this.aficherClient()
  }


  private aficherClient() {
    this.clientservice.AfficherClient().subscribe(Data => {
      this.clientlist = Data
      console.log(Data)
    })
  }


  Supprimeclient(id: number) {
    console.log("ok")
    let conf = confirm("'Voulez-vous le supprimer Article?")
    if (conf) {
      this.clientservice.supprimerClient(id).subscribe(supprime => {
        if (supprime) {
          this.aficherClient()
        }
        window.location.reload();  // Reloads the entire page

      })
    }
  }

}
