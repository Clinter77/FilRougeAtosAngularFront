import { NotificationService } from './../_services/notification.service';
import { UserService } from './../_services/user.service';
import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddClientComponent } from '../add-client/add-client.component';
import { EditCltComponent } from '../edit-clt/edit-clt.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clt: any;
  listdata: MatTableDataSource<any>;
  searchKey: string;
  displayColumns: string[] = ['libelle', 'adresse', 'code_postal', 'ville', 'email', 'telephone', 'fax', 'id_besoin', 'id_proposition'];
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private userService: UserService, private dialog: MatDialog, private notificationService: NotificationService) { }

  ngOnInit() {

    this.getAllClient();
  }

  getAllClient() {
    return this.userService.getAllClient().subscribe(
      data => {
        this.clt = JSON.parse(data);
        this.listdata = new MatTableDataSource(this.clt);
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
    this.dialog.open(AddClientComponent, dialoqConfig);

  }

  edit(id: number) {

    return this.userService.findClientById(id).subscribe(
      data => {
        console.log(data);
        console.log(id);
        const dialoqConfig = new MatDialogConfig();
        dialoqConfig.disableClose = false;
        dialoqConfig.autoFocus = true;
        dialoqConfig.width = '90%';
        dialoqConfig.height = '90%';
        this.dialog.open(AddClientComponent, dialoqConfig);
      }
    );
  }

  supprimer(id: number) {
    if (confirm('Etes vous sur de voulior supprimer ce client et toutes ses informations ?')) {
      return this.userService.delCollabById(id).subscribe(
        data => {
          console.log(data);
          console.log(id);
          this.getAllClient();
          this.notificationService.warn('! Deleted successfully');

        },
        err => {
          console.log(err);
        }
      );
    }
  }

}

  
