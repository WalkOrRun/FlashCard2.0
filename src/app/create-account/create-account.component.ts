import { Component, OnInit } from '@angular/core';
import { Account} from '../Account';
import {HttpClientModule} from '@angular/common/http';
import {AccountService} from '../account.service';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  name:string;
  password:string;
  repassword:string;
  
  constructor(private accService: AccountService) { }

  ngOnInit() {
  }
  addNewAccount(){
    const newAcc={
      name:this.name,
      password:this.password
    }
    this.accService.createAccount(newAcc);
  }
}