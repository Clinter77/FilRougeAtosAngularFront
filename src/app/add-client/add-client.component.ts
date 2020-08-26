import { NotificationService } from './../_services/notification.service';
import { UserService } from './../_services/user.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Client } from '../model/client.model';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  public _contactForm: FormGroup;
  // tslint:disable-next-line: quotemark
  client: Client = new Client();
  message: any;
  constructor(
    private dialogRef: MatDialogRef<AddClientComponent>,
    private router: Router,
    private userService: UserService,
    private notificationService: NotificationService,
    // tslint:disable-next-line: variable-name
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit() {
    this._contactForm = this._formBuilder.group({
    libelle: ['', [Validators.required]],
    adresse: ['', [Validators.required]],
    code_postal: ['', [Validators.required]],
    ville: ['', [Validators.required]],
    email: [],
    tel: ['', [Validators.required]],
    fax: [],
    // tslint:disable-next-line: variable-name
    Idbsn: ['', [Validators.required]],
    Idprops: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.userService.addClient(this._contactForm.value).subscribe(
      (data) => {
        this.message = data;
        this.notificationService.success(':: Successfully added Customer');
        this.closeDialog();
        this.refreshPage();
      },
    );
  }



  addClient() {
    this.userService.addClient(this.client).subscribe(
      (data) => {
        this.message = data;
        this.notificationService.success(':: Successfully added Customer');
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
