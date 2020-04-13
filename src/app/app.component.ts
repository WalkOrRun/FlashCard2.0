import { Component } from '@angular/core';
export type QuizPage = 'create' | 'home' | 'list';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  quiz : QuizPage = 'home';
  get showCreate() {
    return this.quiz === 'create';
  }
  get showHome() {
    return this.quiz === 'home';
  }
  get showList() {
    return this.quiz === 'list';
  }
  toggleEditor(type: QuizPage) {
    this.quiz = type;
  }
}
