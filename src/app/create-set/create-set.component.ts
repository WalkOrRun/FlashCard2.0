import { Component, OnInit } from 
'@angular/core';
import { Card } from '../Card';
import { CardSet } from '../Cardset';
import {CardService} from '../card.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-set',
  templateUrl: './create-set.component.html',
  styleUrls: ['./create-set.component.css']
})
export class CreateSetComponent implements OnInit {
  constructor(private cardService : CardService, private fb : FormBuilder) { }
  cardBuilderForm = this.fb.group( {
    question : [''],
    answer: ['']
  })
  subjectForm = this.fb.group ( {
    subject : ['']
  })
  tempCard : Card[] = [];
  newCardSet : CardSet = { 
    Card : this.tempCard,
    subject : '',
    accountID : 1,
    setID : 1
}
//Stores a card for editing
  cardStore : Card = {
    question : '',
    answer : '',
    marked : false,
    cardID : 1,
    setID : 1
  }


  addCard(question : string, answer : string) {
    this.tempCard.push({question, answer}as Card);
  }
  getCreatedCards() {
    return this.cardService.getMyCreatedSets();
  }
  changeSubject(subject: string) {
    this.newCardSet.subject = subject;
  }
  addNewCard(subjectS : string) {
    this.newCardSet = {
      Card : this.tempCard,
      subject : subjectS,
    accountID : 1,
    setID : 1
    }
    this.cardService.addCreatedCardSet(this.newCardSet);
    this.tempCard = []; 
  }
  RemoveCard(index : number, question: string, answer: string) {
    this.cardStore = {
      question : question,
      answer : answer,
          marked : false,
    cardID : 1,
    setID : 1
    }
    this.tempCard.splice(index, 1);
  }
  getCardsMade() {
    return this.tempCard;
  }
  onSubmit() {
    console.warn(this.cardBuilderForm.value);
  }
  onSubmit2() {
    console.warn(this.subjectForm.value);
  }
  openSet(index : number) {
    this.newCardSet = this.cardService.getCardSet(index);
    this.tempCard = this.newCardSet.Card;
    
  }
  removeCardSet(index : number){
    this.cardService.removeCardSet(index);
  }

  ngOnInit() {
  }
  
}
