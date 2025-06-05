import {Component, OnInit} from '@angular/core';
import {ClientServiceService} from '../../ClientService.service';
import {Router, RouterLink} from '@angular/router';
import {EventService} from '../../event.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-addevent',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './addevent.component.html',
  styleUrl: './addevent.component.css'
})
export class AddeventComponent implements OnInit{
  Eventlist: any[] = []
  Event = {
    titre: "",
    description: "",
    lieu: "",
    categorie: "",
    capacite: ""


  }

  constructor(private eventservice: EventService, private router: Router) {
  }

  ngOnInit(): void {
    this.afficherEvent()
  }


  AjouterEvent() {
    this.eventservice.AjouterEvent(this.Event).subscribe(clientadd => {
      this.Eventlist = clientadd;
      if (clientadd){
        this.router.navigateByUrl('/AffClient');
      }


    })


  }

  afficherEvent() {
    this.eventservice.AfficherEvent().subscribe(Eventaff => {
      this.Eventlist = Eventaff;
      console.log(Eventaff);
    })

  }

}
