import { Component } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
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
    private isMobile = new Subject();
    public screenWidth: string;


    constructor() {
        this.checkWidth();
    }

    onMobileChange(status: boolean) {
        this.isMobile.next(status);
    }

    getMobileStatus(): Observable<any> {
        return this.isMobile.asObservable();
    }

    public checkWidth() {
        var width = window.innerWidth;
        if (width <= 768) {
            this.screenWidth = 'sm';
            this.onMobileChange(true);
        } else if (width > 768 && width <= 992) {
            this.screenWidth = 'md';
            this.onMobileChange(false);
        } else {
            this.screenWidth = 'lg';
            this.onMobileChange(false);
        }
    }  
}
