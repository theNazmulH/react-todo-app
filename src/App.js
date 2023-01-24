import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
import Todos from "./Todos";

function App() {
	const [todos, setTodos] = useState([]);
	const handleTodo = todo => {
		setTodos(prevTodos => {
			return [...prevTodos, { id: uuidv4(), todo }];
		});
	};
	const handleRemoveTodo = id => {
		setTodos(prevTodo => {
			const filteredTodo = prevTodo.filter(todo => todo.id !== id);
			return filteredTodo;
		});
	};
	return (
		<div className="App">
			<h3>Simple Todo List</h3>
			<Form onAddTodo={handleTodo} />
			<Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
		</div>
	);
}

export default App;
