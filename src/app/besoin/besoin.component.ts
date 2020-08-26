import { AddBesoinComponent } from './../add-besoin/add-besoin.component';
import { Besoin } from './../model/besoin.model';
import { UserService } from './../_services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { NotificationService } from '../_services/notification.service';
import { AddCollabComponent } from '../add-collab/add-collab.component';

@Component({
  selector: 'app-besoin',
  templateUrl: './besoin.component.html',
  styleUrls: ['./besoin.component.css'],
})
export class BesoinComponent implements OnInit {
  besoins: any;
  // tslint:disable-next-line: no-inferrable-types
  term: string = '';
  listdata: MatTableDataSource<any>;
  searchKey: string;
  displayColumns: string[] = ['d_debut', 'site', 'intitule', 'contactClient', 'tel', 'Proposition', 'd_echeance', 'statut', 'action'];
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private userService: UserService, private dialog: MatDialog, private notificationService: NotificationService) { }
  ngOnInit() {
    this.getBesoins();
    this.getAllbesoins();
  }

  getBesoins() {
    return this.userService.getListBesoin().subscribe(
      data => {
        this.besoins = JSON.parse(data);
        // console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  getAllbesoins() {
    return this.userService.getListBesoin().subscribe(
      data => {
        this.besoins = JSON.parse(data);
        this.listdata = new MatTableDataSource(this.besoins);
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
    this.dialog.open(AddBesoinComponent, dialoqConfig);

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
        this.dialog.open(AddBesoinComponent, dialoqConfig);
      }
    );
  }

  supprimer(id: number) {
    if (confirm('Etes vous sur de voulior supprimer ce Collaborateur et tous ses informations ?')) {
      return this.userService.delbesoinById(id).subscribe(
        data => {
          console.log(data);
          console.log(id);
          this.notificationService.warn('! Deleted successfully');

        },
        err => {
          console.log(err);
        }
      );
    }
  }

}
