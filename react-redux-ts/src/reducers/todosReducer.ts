import { Todo, FetchTodosAction, ActionTypes } from '../actions';

export const todoReducer = (
	state: Todo[] = [],
	action: FetchTodosAction
): Todo[] => {
	switch (action.type) {
		case ActionTypes.FetchTodos:
			return action.payload;
		// case ActionTypes.DeleteTodo:
		// 	return state.filter(todo => todo.id !== action.payload.id);
		default:
			return state;
	}
};
