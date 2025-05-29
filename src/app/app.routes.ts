import { Routes } from '@angular/router';
import {ClientComponent} from './client/client.component';
import {ListclientComponent} from './listclient/listclient.component';
import {NamedChunksPlugin} from '@angular-devkit/build-angular/src/tools/webpack/plugins/named-chunks-plugin';
import {NavbarComponent} from './navbar/navbar.component';
import {ModClientComponent} from './mod-client/mod-client.component';

export const routes: Routes = [
  {path:'AddClient',component:ClientComponent},
  {path:'AffClient',component:ListclientComponent},
  {path:'modclient',component:ModClientComponent},
  {path:'',component:ClientComponent},
];
