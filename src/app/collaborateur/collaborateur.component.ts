import { NotificationService } from './../_services/notification.service';
import { UserService } from './../_services/user.service';
import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddCollabComponent } from '../add-collab/add-collab.component';
import { EditCollabComponent } from '../edit-collab/edit-collab.component';


@Component({
  selector: 'app-collaborateur',
  templateUrl: './collaborateur.component.html',
  styleUrls: ['./collaborateur.component.css']
})
export class CollaborateurComponent implements OnInit {

  collabs: any;
  listdata: MatTableDataSource<any>;
  searchKey: string;
  displayColumns: string[] = ['nom', 'prenom', 'agence', 'indentifiant', 'experience', 'tel', 'competence', 'bench', 'action'];
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private userService: UserService, private dialog: MatDialog, private notificationService: NotificationService) { }

  ngOnInit() {

    this.getAllCollab();
  }


  getAllCollab() {
    return this.userService.getAllCollaborateur().subscribe(
      data => {
        this.collabs = JSON.parse(data);
        this.listdata = new MatTableDataSource(this.collabs);
        this.listdata.sort = this.sort;
        this.listdata.paginator = this.paginator;

      },
      err => {
        console.log(err);
      }
    );
  }

  onSearchClear() {
    // tslint:disable-next-line: quotemark
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listdata.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {
    const dialoqConfig = new MatDialogConfig();
    dialoqConfig.disableClose = false;
    dialoqConfig.autoFocus = true;
    dialoqConfig.width = '90%';
    dialoqConfig.height = '90%';
    this.dialog.open(AddCollabComponent, dialoqConfig);

  }

  edit(id: number) {

    return this.userService.findCollabById(id).subscribe(
      data => {
        console.log(data);
        console.log(id);
        const dialoqConfig = new MatDialogConfig();
        dialoqConfig.disableClose = false;
        dialoqConfig.autoFocus = true;
        dialoqConfig.width = '90%';
        dialoqConfig.height = '90%';
        this.dialog.open(AddCollabComponent, dialoqConfig);
      }
    );
  }

  /*
  ajouter(id: number) {
        if (confirm('Etes vous sûr de vouloir ajouter ce Collaborateur ?')) {
          return this.userService.addCollabByID(id).subscribe(
            data => {
              console.log(data);
              console.log(id);
              this.getAllCollab();
              this.notificationService.warn('Ajout effectué');
            },
            err => {
              console.log(err);
            }
          );
        }
      }
  */  

  supprimer(id: number) {
    if (confirm('Etes vous sur de voulior supprimer ce Collaborateur et tous ses informations ?')) {
      return this.userService.delCollabById(id).subscribe(
        data => {
          console.log(data);
          console.log(id);
          this.getAllCollab();
          this.notificationService.warn('! Deleted successfully');

        },
        err => {
          console.log(err);
        }
      );
    }
  }
    
    

}
