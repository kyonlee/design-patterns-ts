import { combineReducers, Store } from 'redux';

import { todoReducer } from './todosReducer';
import { Todo } from '../actions';

export interface StoreState {
	todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
	todos: todoReducer
});
