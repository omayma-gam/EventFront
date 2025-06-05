import { Routes } from '@angular/router';
import {ClientComponent} from './Clienta/client/client.component';
import {ListclientComponent} from './Clienta/listclient/listclient.component';
import {NamedChunksPlugin} from '@angular-devkit/build-angular/src/tools/webpack/plugins/named-chunks-plugin';
import {NavbarComponent} from './navbar/navbar.component';
import {ModClientComponent} from './Clienta/mod-client/mod-client.component';
import {AboutComponent} from './about/about.component';
import {AddeventComponent} from './Event/addevent/addevent.component';
import {ListEventComponent} from './Event/list-event/list-event.component';
import {ModEventComponent} from './Event/mod-event/mod-event.component';

export const routes: Routes = [
  {path:'AddClient',component:ClientComponent},
  {path:'AffClient',component:ListclientComponent},
  {path:'modclient',component:ModClientComponent},
  {path:'about',component:AboutComponent},
  {path:'AddEvent',component:AddeventComponent},
  {path:'AffEvent',component:ListEventComponent},
  {path:'modEvent',component:ModEventComponent},
  {path:'',component:ClientComponent},
];
