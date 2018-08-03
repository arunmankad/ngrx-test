import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {TutorialState} from '../../state/tutorial.state';
import {Tutorial} from './../../model/tutorial.model';
import * as TutorialActions from './../../state/tutorial.action';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<TutorialState>) { }

  addTutorial(name, url) {
    // const cool: Tutorial = { name: name, url: url};
    this.store.dispatch(new TutorialActions.AddTutorial({name: name, url: url}));
  }
  ngOnInit() {
  }

}
