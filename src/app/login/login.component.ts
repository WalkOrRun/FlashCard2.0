import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import {AccountService} from '../account.service';
import { Account} from '../Account';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:string;
  password:string;
  accounts: Account[]=[];
  constructor(private accService: AccountService) { }
  
  ngOnInit() {
  }
  fetchData(){
    this.accService.getAccounts().subscribe(data => {
      this.accounts = data;
    });
  }

  
}