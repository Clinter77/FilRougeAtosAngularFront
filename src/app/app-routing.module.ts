/**
 * Ce fichier sert à définir les reoutes (les itinéraires de l'API)
 */
import { AddCollabComponent } from './add-collab/add-collab.component';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ClientComponent } from './client/client.component';
import { PropositionComponent } from './proposition/proposition.component';
import { BesoinComponent } from './besoin/besoin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AjouterContactComponent } from './ajouter-contact/ajouter-contact.component';
import { EditCollabComponent } from './edit-collab/edit-collab.component';
import { EditCltComponent } from './edit-clt/edit-clt.component';
import { AddBesoinComponent } from './add-besoin/add-besoin.component';
import { ToggleComponent } from './toggle/toggle.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  {path: 'besoin', component: BesoinComponent},
  {path: 'proposition', component: PropositionComponent},
  {path: 'collaborateur', component: CollaborateurComponent},
  {path: 'addCollab', component: AddCollabComponent},
  {path: 'addClient', component: AddClientComponent},
  {path: 'client', component: ClientComponent},
  {path: 'ajouterContact', component: AjouterContactComponent},
  {path: 'editCollab', component: EditCollabComponent},
  {path: 'editClt', component: EditCltComponent},
  { path: 'addBesoin', component: AddBesoinComponent},
  { path: 'toggle', component: ToggleComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
