import { TodoProps } from '../App'
import Todo from './Todo'

interface TodoListProps {
  handleTaskDelete: (todos: TodoProps[]) => void
  handleTaskComplete: (id: string) => void
  todos: TodoProps[]
}

const TodoList = (props: TodoListProps) => {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>
            <Todo
              todo={todo}
              handleTaskDelete={props.handleTaskDelete}
              handleTaskComplete={props.handleTaskComplete}
            />
          </li>
        ))}
      </ul>
      <button
        className='bg-blue-600 m-3 p-4 text-2xl rounded-lg font-semibold hover:bg-pink-200 hover:text-black'
        onClick={() => props.handleTaskDelete(props.todos)}
      >
        Delete Completed
      </button>
    </div>
  )
}
export default TodoList
