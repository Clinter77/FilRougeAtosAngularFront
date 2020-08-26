import { NotificationService } from './../_services/notification.service';
import { UserService } from './../_services/user.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Collab } from '../model/collab.model';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-collab',
  templateUrl: './add-collab.component.html',
  styleUrls: ['./add-collab.component.css']
})
export class AddCollabComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  public _contactForm: FormGroup;
  // tslint:disable-next-line: quotemark
  collab: Collab = new Collab();
  message: any;
  constructor(
    private dialogRef: MatDialogRef<AddCollabComponent>,
    private router: Router,
    private userService: UserService,
    private notificationService: NotificationService,
    // tslint:disable-next-line: variable-name
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit() {
    this._contactForm = this._formBuilder.group({
    idClb: [],
    nom: ['', [Validators.required]],
    prenom: ['', [Validators.required]],
    email: ['', [Validators.required]],
    // tslint:disable-next-line: variable-name
    Identifiant_Dass: ['', [Validators.required]],
    bench: ['', [Validators.required]],
    tel: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.userService.addCollab(this._contactForm.value).subscribe(
      (data) => {
        this.message = data;
        this.notificationService.success(':: Successfully added Collaborateur');
        this.closeDialog();
        this.refreshPage();
      },
    );
  }



  addCollab() {
    this.userService.addCollab(this.collab).subscribe(
      (data) => {
        this.message = data;
        this.notificationService.success(':: Successfully added Collaborateur');
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
