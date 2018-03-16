export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (actiontype {
    case 'ADD_TODO':
      return { todos: state.todos.concat(action.todo.text) };
      default:
        return state;
  })
}
