import { TokenStorageService } from './token-storage.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collab } from '../model/collab.model';

const API_URL = 'https://atosdevbackend.herokuapp.com/api/test/';
const url = 'https://atosdevbackend.herokuapp.com/';

const auth = sessionStorage.getItem('TOKEN_KEY');
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + auth
  })
};
@Injectable({
  providedIn: 'root'
})

export class UserService {
  private baseclbUrl = 'https://atosdevbackend.herokuapp.com/clb';
  private basecltUrl = 'https://atosdevbackend.herokuapp.com/clt';
  private delclbUrl = 'https://atosdevbackend.herokuapp.com/delclb';
  private delcltUrl = 'https://atosdevbackend.herokuapp.com/delclt';
  private bsnUrl = 'https://atosdevbackend.herokuapp.com/besoins';

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getListClients(): Observable<any> {
    return this.http.get(url + 'clients', { responseType: 'text' });
  }

  // Crud Besoins Clients
  getListBesoin(): Observable<any> {
    return this.http.get(url + 'besoin', { responseType: 'text' });
  }

  delbesoinById(id: number): Observable<any> {
    return this.http.delete(`${this.bsnUrl}/${id}`, {responseType: 'text'});
  }

  delclientById(id: number): Observable<any> {
    return this.http.delete(`${this.delcltUrl}/${id}`, {responseType: 'text'});
  }

  addBesoin(besoin): Observable<any> {
    return this.http.put(url + 'addBesoin', besoin, {responseType: 'text'});
  }

  getAllPropositions(): Observable<any> {
    return this.http.get(url + 'propositions', { responseType: 'text' });
  }

  getAllCollaborateur(): Observable<any> {
    return this.http.get(url + 'clb', { responseType: 'text' });
  }

  getAllClient(): Observable<any> {
    return this.http.get(url + 'clt', { responseType: 'text' });
  }

  getListeContact(): Observable<any> {
    return this.http.get(url + 'ctc', {responseType: 'text'});
  }


  findCollabById(id: number): Observable<any> {
    return this.http.get(`${this.baseclbUrl}/${id}`, {responseType: 'text'});
  }

  findClientById(id: number): Observable<any> {
    return this.http.get(`${this.basecltUrl}/${id}`, {responseType: 'text'});
  }

  delCollabById(id: number): Observable<any> {
    return this.http.delete(`${this.delclbUrl}/${id}`, {responseType: 'text'});
  }

  EditCollabById(Identifiant_Dass: number): Observable<any> {
    return this.findCollabById(Identifiant_Dass);
  }

  addCollab(collab): Observable<any> {
    return this.http.post(url + 'addclb', collab, {responseType: 'text'});
  }

  addClient(clients): Observable<any> {
    return this.http.put(url + 'addclient', clients, {responseType: 'text'});
  }

}
