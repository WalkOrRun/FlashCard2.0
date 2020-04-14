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
  message:string;
  accounts: Account[]=[];
  constructor(private accService: AccountService) { }
  
  ngOnInit() {
    this.fetchData();
  }
  fetchData(){
    this.accService.getAccounts().subscribe(data => {
      this.accounts = data;
    });
  }
  login(){
    for(let i =0; i<this.accounts.length;i++){
      if((this.name==this.accounts[i].name)&&(this.password==this.accounts[i].password)){
        this.message='login successed, hello'+this.name;
      }
      else{
        this.message='wrong username or password';
      }
    }
  }

  
}