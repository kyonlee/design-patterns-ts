import React from 'react';
import { connect } from 'react-redux';

import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
	todos: Todo[];
	fetchTodos: Function;
	deleteTodo: typeof deleteTodo;
}

class _App extends React.Component<AppProps> {
	onFetchTodos = (): void => {
		this.props.fetchTodos();
	};

	onDeleteTodos = (id: number): void => {
		this.props.deleteTodo(id);
	};

	renderTodos(): JSX.Element[] {
		return this.props.todos.map(
			(todo: Todo): JSX.Element => {
				return (
					<div key={todo.id} onClick={() => this.onDeleteTodos(todo.id)}>
						{todo.title}
					</div>
				);
			}
		);
	}

	render() {
		return (
			<div>
				<button onClick={this.onFetchTodos}>Fetch</button>
				{this.renderTodos()}
			</div>
		);
	}
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
	return { todos };
};

export const App = connect(
	mapStateToProps,
	{ fetchTodos, deleteTodo }
)(_App);
