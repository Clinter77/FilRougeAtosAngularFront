import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../_services/user.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { NotificationService } from '../_services/notification.service';
import { AddCollabComponent } from '../add-collab/add-collab.component';

@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.css']
})
export class PropositionComponent implements OnInit {
  Props: any;
  listdata: MatTableDataSource<any>;
  searchKey: string;
  displayColumns: string[] = ['d_pro', 'collaborateur', 'agence',  'prixVente', 'prixAchat', 'marge', 'd_relance', 'statut_prop', 'action'];
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private userService: UserService, private dialog: MatDialog, private notificationService: NotificationService) { }
  ngOnInit() {
    this.getAllProps();
  }

  getAllProps() {
    return this.userService.getAllPropositions().subscribe(
      data => {
        this.Props = JSON.parse(data);
        console.log(data);
        this.listdata = new MatTableDataSource(this.Props);
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

  supprimer(id: number) {
    if (confirm('Etes vous sur de voulior supprimer ce Collaborateur et tous ses informations ?')) {
      return this.userService.delCollabById(id).subscribe(
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
