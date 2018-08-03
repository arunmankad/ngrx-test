import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { TutorialServiceService } from './../tutorial-service.service';
import * as TutorialActions from './tutorial.action';
import {mergeMap, map, tap} from 'rxjs/operators';

import {Tutorial} from './../model/tutorial.model';


@Injectable()
export class TutorialEffects {

    constructor(private actions$: Actions,
        private tutService: TutorialServiceService ) { }
    @Effect()
    loadTutorials$ = this.actions$.pipe(
        tap(() => console.log('from the effects')),
        ofType(TutorialActions.LOAD_TUTORIAL),
         mergeMap((action: TutorialActions.LoadTutorial) => this.tutService.getTutorials().pipe(
             map((tutorials: Tutorial[]) => new TutorialActions.LoadSuccess(tutorials))
         ))
    );
}
