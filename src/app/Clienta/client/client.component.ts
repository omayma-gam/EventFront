import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ClientServiceService} from '../../ClientService.service';
import {Router, RouterLink} from '@angular/router';
import {DataRowOutlet} from '@angular/cdk/table';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  clientlist: any[] = []
  client = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  constructor(private clientservice: ClientServiceService, private router: Router) {
  }

  ngOnInit(): void {
    this.afficherClient()
  }


  AjouterClient() {
    this.clientservice.AjouterClient(this.client).subscribe(clientadd => {
      this.clientlist = clientadd;
      if (clientadd){
        this.router.navigateByUrl('/AffClient');
      }


    })


  }

  afficherClient() {
    this.clientservice.AfficherClient().subscribe(Client => {
      this.clientlist = Client;
      console.log(Client);
    })

  }


}
