import { Injectable } from '@angular/core';
import { Account } from './Account';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
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
    .pipe(map(responseData => {
      console.log(responseData);
      const accArray: Account[] = [];
      for(const key in responseData){
        accArray.push(responseData[key]);
      }
      return accArray;
    }))
  }
}