import { initialState, State } from './state';
import { INCREMENT, EVENT_FROM_EFFECT, DECREMENT, RESET } from '../actions/actions';
import { AppComponent } from './../app.component';
import { ActionReducer, Action } from '@ngrx/store';

export const mainStoreReducer: ActionReducer<State> = (state = initialState, action: Action) => {

    switch(action.type) {

        case INCREMENT: {
            return {
                counter: state.counter + 1
            }
        } 

        case EVENT_FROM_EFFECT: {
            return {
                counter: 4
            }
        }

        case DECREMENT: {
            return {
                counter: state.counter - 1
            }
        }

        case RESET: {
            return {
                counter: 0
            }
        }

        default: {
            return state;
        }
    }
}