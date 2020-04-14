import { Component, OnInit } from '@angular/core';
import { Account} from '../Account';
import {HttpClientModule} from '@angular/common/http';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}