/**
 * Ce fichier sert à définir les modules de l'application
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authInterceptorProviders } from './_helpers/auth_interceptor';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BesoinComponent } from './besoin/besoin.component';
import { PropositionComponent } from './proposition/proposition.component';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { ClientComponent } from './client/client.component';
import { FilterbesoinPipe } from './filterbesoin.pipe';
import { AjouterContactComponent } from './ajouter-contact/ajouter-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {
  MatButtonModule,
  MatPaginatorModule,
  MatSortModule, MatInputModule,
  MatDialogModule,
  MatSnackBarModule,
  MatCardModule,
  MatToolbarModule
} from '@angular/material';
import {MatTableExporterModule} from 'mat-table-exporter';
import { AddCollabComponent } from './add-collab/add-collab.component';
import { EditCollabComponent } from './edit-collab/edit-collab.component';
import { EditCltComponent } from './edit-clt/edit-clt.component';
import { NotificationService } from './_services/notification.service';
import { AddBesoinComponent } from './add-besoin/add-besoin.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    NavigationComponent,
    SidebarComponent,
    BesoinComponent,
    PropositionComponent,
    CollaborateurComponent,
    FilterbesoinPipe,
    AjouterContactComponent,
    AddCollabComponent,
    EditCollabComponent,
    AddBesoinComponent,
    AddClientComponent,
    ClientComponent,
    EditCltComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatTableExporterModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule

  ],
  providers: [authInterceptorProviders, NotificationService],
  bootstrap: [AppComponent],
  entryComponents: [AddCollabComponent, EditCollabComponent, AddBesoinComponent, EditCltComponent]
})
export class AppModule { }
