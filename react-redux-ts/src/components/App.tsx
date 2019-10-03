import React from 'react';
import { connect } from 'react-redux';

import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
	todos: Todo[];
	fetchTodos(): any;
}

class _App extends React.Component<AppProps> {
	onFetchTodos = (): void => {
		this.props.fetchTodos();
	};

	// onDeleteTodos = (): void => {};

	renderTodos(): JSX.Element[] {
		return this.props.todos.map(
			(todo: Todo): JSX.Element => {
				return (
					<div key={todo.id} /* onClick={this.onDeleteTodos} */>
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
	{ fetchTodos }
)(_App);
