import {Action} from '@ngrx/store';
import { Tutorial } from '../model/tutorial.model';

import * as TutorialActions from '../state/tutorial.action';
const initialState: Tutorial = {
    name: 'GOOGLE',
    url: 'http://google.com'
};

export function reducer(state: Tutorial[]= [initialState], action: TutorialActions.Actions) {
    switch (action.type) {
        case TutorialActions.LOAD_TUTORIAL_SUCCESS :
            console.log('Load success' + JSON.stringify(state));
            return [...state,
                ...action.payload
            ];
        case TutorialActions.ADD_TUTORIAL :
            console.log('coo' + JSON.stringify(state));
            return [...state, action.payload];
        case TutorialActions.REMOVE_TUTORIAL :
            console.log('foo' + JSON.stringify(state));
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
}

