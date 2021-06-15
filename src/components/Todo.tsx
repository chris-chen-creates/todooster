import { TodoTaskProps } from '../interface'
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from 'react-icons/md'

const taskChecked = (
  <MdRadioButtonChecked
    id='checked'
    className='inline-block align-text-bottom text-pink-300 mr-3'
  />
)

const taskUnchecked = (
  <MdRadioButtonUnchecked
    id='unchecked'
    className='inline-block align-text-bottom text-blue-600 mr-3 hover:text-pink-300'
  />
)

const Todo = ({ todo, handleTaskComplete }: TodoTaskProps) => {
  return (
    <div className='text-3xl m-4'>
      <div>
        <div onClick={() => handleTaskComplete(todo.id)}>
          {todo.isComplete ? (
            <span>{taskChecked}</span>
          ) : (
            <span>{taskUnchecked}</span>
          )}

          <label
            style={{ textDecoration: todo.isComplete ? 'line-through' : '' }}
          >
            {todo.task}
          </label>
        </div>
      </div>
    </div>
  )
}

export default Todo
