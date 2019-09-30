import { Todo, FetchTodosAction } from '../actions';

import { ActionTypes } from '../actions/types';

export const todoReducer = (state: Todo[] = [], action: FetchTodosAction) => {
	switch (action.type) {
		case ActionTypes.FetchTodos:
			return action.payload;
		default:
			return state;
	}
};
