import { Component, OnInit } from '@angular/core';
import {TutorialServiceService} from './../../tutorial-service.service';

// import {Observable} from 'rxjs/Observable';
import {Store, select} from '@ngrx/store';
import {Tutorial} from './../../model/tutorial.model';
import { TutorialState } from '../../state/tutorial.state';
import * as TutorialActions from './../../state/tutorial.action';
import { Observable, of } from 'rxjs';
import * as fromAppState from '../../../state/app.state';
import * as AppActions from './../../../state/app.action';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  tutorials$: Observable<Tutorial[]>;
  editApp$: Observable<boolean> = of(false);
  ea = false;

  constructor(private store: Store<TutorialState>, private appStore: Store<fromAppState.AppState> ) {
  }
  removeTutorial(index) {
    // alert(index);
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }
  editTutorial(index) {
    // this.store.dispatch();
    alert('edit');
  }
  showEdit() {
    console.log(this.tutorials$);
    this.appStore.dispatch(new AppActions.EditApp(true));
  }
  hideEdit() {
    console.log(this.tutorials$);
    this.appStore.dispatch(new AppActions.EditApp(false));
  }
  ngOnInit() {
    // this.tutService.getTutorials().subscribe(
    //   (tutorials: Tutorial[]) => console.log(tutorials)
    // );
    this.store.dispatch(new TutorialActions.LoadTutorial());
    // this.appState$ = this.appStore.pipe(select(fromAppState.getEditApp));
    // console.log('MMMMMMMM - ' + this.appStore.pipe(select(fromAppState.getEditApp)));
    this.tutorials$ = this.store.select(state => state.tutorials);
    this.editApp$ = this.appStore.select(state => state.appState.editApp);
    this.editApp$.subscribe(data => this.ea = data );
  }

}
