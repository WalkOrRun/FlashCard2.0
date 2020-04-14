import { Injectable } from '@angular/core';
import { Account } from './Account';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  
  createAccount(newAcc: Account){
    return this.http.post('https://flashcarddata-ad85d.firebaseio.com/'+'account.json',newAcc);
  }
  getAccount(){
    return this.http.get<Account[]>('https://flashcarddata-ad85d.firebaseio.com/'+ 'account.json')
  }
}