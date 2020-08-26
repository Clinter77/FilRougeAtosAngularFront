import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-contact',
  templateUrl: './ajouter-contact.component.html',
  styleUrls: ['./ajouter-contact.component.css']
})
export class AjouterContactComponent implements OnInit {

  contacts: string;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  getAllContacts() {
    return this.userService.getListeContact().subscribe(
      response => {
        this.contacts = JSON.parse(response);
        console.log(response);

      },
      err => {
        console.log(err);
      }
    );
  }

  clickEvent() {
  this.getAllContacts();
  }
}
