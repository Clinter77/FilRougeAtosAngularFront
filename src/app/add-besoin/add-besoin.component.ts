import { Besoin } from './../model/besoin.model';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Collab } from '../model/collab.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddCollabComponent } from '../add-collab/add-collab.component';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { NotificationService } from '../_services/notification.service';

@Component({
  selector: 'app-add-besoin',
  templateUrl: './add-besoin.component.html',
  styleUrls: ['./add-besoin.component.css']
})
export class AddBesoinComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  public _contactForm: FormGroup;
  // tslint:disable-next-line: quotemark
  besoin: Besoin = new Besoin();
  message: any;
  constructor(
    private dialogRef: MatDialogRef<AddBesoinComponent>,
    private router: Router,
    private userService: UserService,
    private notificationService: NotificationService,
    // tslint:disable-next-line: variable-name
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit() {
    this._contactForm = this._formBuilder.group({

    d_debut: ['', [Validators.required]],
    intitule: ['', [Validators.required]],
    d_echeance: ['', [Validators.required]],
    // tslint:disable-next-line: variable-name
    ts: ['', [Validators.required]],
    fCloture: ['', [Validators.required]],
    fRecurent: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.userService.addBesoin(this._contactForm.value).subscribe(
      (data) => {
        this.message = data;
        this.notificationService.success(':: Successfully added Besoin');
        this.closeDialog();
        this.refreshPage();
      },
    );
  }

  addBesoin() {
    this.userService.addBesoin(this.besoin).subscribe(
      (data) => {
        this.message = data;
        this.notificationService.success(':: Successfully added Besoin');
        this.closeDialog();
        this.refreshPage();
      },
    );
  }

  closeDialog() {
    this.dialogRef.close();
  }

  refreshPage() {
    window.location.reload();
   }


}
