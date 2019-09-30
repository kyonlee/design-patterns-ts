import { Todo, FetchTodosAction } from '../actions';
import { ActionTypes } from '../actions/types';

export const todoReducer = (
	state: Todo[] = [],
	action: FetchTodosAction
): Todo[] => {
	switch (action.type) {
		case ActionTypes.FetchTodos:
			return action.payload;
		default:
			return state;
	}
};
