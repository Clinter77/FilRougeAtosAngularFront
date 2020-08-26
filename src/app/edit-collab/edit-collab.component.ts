import { UserService } from './../_services/user.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Collab } from '../model/collab.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { NotificationService } from '../_services/notification.service';

@Component({
  selector: 'app-edit-collab',
  templateUrl: './edit-collab.component.html',
  styleUrls: ['./edit-collab.component.css']
})
export class EditCollabComponent implements OnInit {

  public _contactForm: FormGroup;
  collab: Collab;
  message: any;
  constructor(
    private dialogRef: MatDialogRef<EditCollabComponent>,
    private router: Router,
    private userService: UserService,
    private notificationService: NotificationService,
    private _formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA)
    public data: any) { }

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
      this.userService.EditCollabById(this._contactForm.value).subscribe(        
        (data) => {  
          this.message = data;
          this.notificationService.success(':: Successfully modified Collaborator');
          this.closeDialog();
          this.refreshPage();
        },
        );
      }
      
  

    editCollab() {
      this.userService.EditCollabById;
    }



    closeDialog() {
      this.dialogRef.close();
    }
  
    refreshPage() {
      window.location.reload();
    }
  
}
